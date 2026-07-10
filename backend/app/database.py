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
    """联系记录表"""
    __tablename__ = "inquiries"

    id = Column(Integer, primary_key=True, autoincrement=True)
    company = Column(String(100), default="", comment="公司名称")
    name = Column(String(50), nullable=False, comment="联系人")
    position = Column(String(50), default="", comment="招聘岗位")
    phone = Column(String(20), nullable=False, comment="联系电话")
    message = Column(Text, default="", comment="备注信息")
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
