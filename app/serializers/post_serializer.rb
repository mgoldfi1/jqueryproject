class PostSerializer < ActiveModel::Serializer
  attributes :id, :breakfast, :lunch, :dinner, :date, :user_id 
end
