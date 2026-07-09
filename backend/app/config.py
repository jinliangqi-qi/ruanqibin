import os
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    database_url: str = "sqlite+aiosqlite:///./data/teaching.db"
    admin_username: str = "admin"
    admin_password: str = "changeme123"
    serverchan_sendkey: str = ""
    cors_origins: str = "http://localhost:3000,http://localhost:8000"
    host: str = "0.0.0.0"
    port: int = 8000

    class Config:
        env_file = ".env"

    @property
    def cors_origins_list(self) -> list[str]:
        return [origin.strip() for origin in self.cors_origins.split(",") if origin.strip()]


settings = Settings()

os.makedirs(os.path.join(os.path.dirname(__file__), "..", "data"), exist_ok=True)
