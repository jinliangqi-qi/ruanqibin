from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession, async_sessionmaker
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy import Column, Integer, String, Text, DateTime, Boolean
from datetime import datetime

from app.config import settings

engine = create_async_engine(settings.database_url, echo=False)
async_session = async_sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)


class Base(DeclarativeBase):
    pass


class Inquiry(Base):
    """咨询记录表"""
    __tablename__ = "inquiries"

    id = Column(Integer, primary_key=True, autoincrement=True)
    parent_name = Column(String(50), nullable=False, comment="家长姓名")
    student_name = Column(String(50), nullable=False, comment="学生姓名")
    grade = Column(String(20), nullable=False, comment="年级")
    phone = Column(String(20), nullable=False, comment="联系电话")
    wechat = Column(String(50), default="", comment="微信号")
    message = Column(Text, default="", comment="咨询内容")
    is_read = Column(Boolean, default=False, comment="是否已读")
    is_replied = Column(Boolean, default=False, comment="是否已回复")
    created_at = Column(DateTime, default=datetime.now, comment="提交时间")
    note = Column(Text, default="", comment="管理员备注")


async def init_db():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)


async def get_db():
    async with async_session() as session:
        yield session
