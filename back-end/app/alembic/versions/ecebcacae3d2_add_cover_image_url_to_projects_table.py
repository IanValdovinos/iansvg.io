"""Add cover_image_url to projects table

Revision ID: ecebcacae3d2
Revises: 8de69d65f8d2
Create Date: 2025-06-24 18:46:27.663293

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'ecebcacae3d2'
down_revision: Union[str, Sequence[str], None] = '8de69d65f8d2'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    op.add_column(
        'projects',
        sa.Column('cover_image_url', sa.String(), nullable=True)
    )


def downgrade() -> None:
    """Downgrade schema."""
    op.drop_column('projects', 'cover_image_url')
