class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :user_id, :created_at
  belongs_to :user
  belongs_to :post
end
