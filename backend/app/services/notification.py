import httpx
from app.config import settings
from app.database import Inquiry


async def send_inquiry_notification(inquiry: Inquiry) -> bool:
    """
    通过 Server酱 发送微信通知
    1. 在 https://sct.ftqq.com/ 注册账号
    2. 获取 SendKey 填入 .env 的 SERVERCHAN_SENDKEY
    3. 关注微信公众号即可收到通知
    """
    if not settings.serverchan_sendkey:
        return False

    title = f"新的课程咨询 - {inquiry.parent_name}"
    content = f"""
## 新的课程咨询

**家长姓名**：{inquiry.parent_name}
**学生姓名**：{inquiry.student_name}
**年级**：{inquiry.grade}
**联系电话**：{inquiry.phone}
**微信号**：{inquiry.wechat or '未填写'}
**咨询内容**：{inquiry.message or '未填写'}
**提交时间**：{inquiry.created_at.strftime('%Y-%m-%d %H:%M')}
"""

    async with httpx.AsyncClient() as client:
        response = await client.post(
            f"https://sctapi.ftqq.com/{settings.serverchan_sendkey}.send",
            data={"title": title, "desp": content},
        )
        return response.status_code == 200
