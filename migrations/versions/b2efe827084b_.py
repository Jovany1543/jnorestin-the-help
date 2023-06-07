"""empty message

Revision ID: b2efe827084b
Revises: 2a834a8d66a2
Create Date: 2023-06-06 01:47:08.388387

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b2efe827084b'
down_revision = '2a834a8d66a2'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('image', schema=None) as batch_op:
        batch_op.add_column(sa.Column('url', sa.String(length=500), nullable=False))
        batch_op.drop_column('image_url')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('image', schema=None) as batch_op:
        batch_op.add_column(sa.Column('image_url', sa.VARCHAR(length=500), autoincrement=False, nullable=False))
        batch_op.drop_column('url')

    # ### end Alembic commands ###
