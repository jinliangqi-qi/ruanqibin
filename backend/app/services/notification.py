import httpx
from app.config import settings


async def send_inquiry_notification(inquiry):
    """通过 Server酱 发送微信通知"""
    sendkey = settings.serverchan_sendkey
    if not sendkey:
        return

    title = f"新联系：{inquiry.name}"
    content = f"""
公司：{inquiry.company or '未填写'}
联系人：{inquiry.name}
岗位：{inquiry.position or '未填写'}
电话：{inquiry.phone}
备注：{inquiry.message or '无'}
    """.strip()

    try:
        async with httpx.AsyncClient(timeout=10) as client:
            await client.post(
                f"https://sctapi.ftqq.com/{sendkey}.send",
                data={"title": title, "desp": content},
            )
    except Exception:
        pass
