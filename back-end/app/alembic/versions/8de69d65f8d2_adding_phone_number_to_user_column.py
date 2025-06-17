"""Adding phone number to user column

Revision ID: 8de69d65f8d2
Revises: 
Create Date: 2025-06-16 20:43:56.084734

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '8de69d65f8d2'
down_revision: Union[str, Sequence[str], None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    # Add phone_number column to user table
    op.add_column('users', sa.Column('phone_number', sa.String(length=15), nullable=True))


def downgrade() -> None:
    """Downgrade schema."""
    # Remove phone_number column from user table
    op.drop_column('users', 'phone_number')
