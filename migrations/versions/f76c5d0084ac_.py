"""empty message

Revision ID: f76c5d0084ac
Revises: 
Create Date: 2023-06-28 03:59:20.338306

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f76c5d0084ac'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=256), nullable=False),
    sa.Column('profile_image', sa.String(length=256), nullable=True),
    sa.Column('password', sa.String(length=256), nullable=False),
    sa.Column('name', sa.String(length=256), nullable=False),
    sa.Column('date_of_birth', sa.String(length=256), nullable=True),
    sa.Column('is_helper', sa.Boolean(), nullable=True),
    sa.Column('description', sa.String(length=500), nullable=True),
    sa.Column('phone_number', sa.String(length=20), nullable=True),
    sa.Column('address', sa.String(length=200), nullable=True),
    sa.Column('skills', sa.String(length=500), nullable=True),
    sa.Column('city', sa.String(length=50), nullable=True),
    sa.Column('location', sa.String(length=50), nullable=True),
    sa.Column('zipcode', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('profile_image')
    )
    op.create_table('posts',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('helper_id', sa.Integer(), nullable=True),
    sa.Column('description', sa.String(length=500), nullable=False),
    sa.Column('location', sa.String(length=256), nullable=False),
    sa.Column('city', sa.String(length=256), nullable=False),
    sa.Column('date', sa.String(length=256), nullable=False),
    sa.Column('price', sa.Integer(), nullable=False),
    sa.Column('post_status', sa.String(length=256), nullable=False),
    sa.ForeignKeyConstraint(['helper_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('candidates',
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('post_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['post_id'], ['posts.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('user_id', 'post_id')
    )
    op.create_table('images',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('post_id', sa.Integer(), nullable=True),
    sa.Column('url', sa.String(length=500), nullable=False),
    sa.Column('public_id', sa.String(length=250), nullable=False),
    sa.ForeignKeyConstraint(['post_id'], ['posts.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('public_id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('images')
    op.drop_table('candidates')
    op.drop_table('posts')
    op.drop_table('users')
    # ### end Alembic commands ###
