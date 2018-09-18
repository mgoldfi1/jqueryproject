class User < ApplicationRecord
  has_secure_password
  has_many :comments
  has_many :posts
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :weight, presence: true
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates(:password, { :length => { :in => 6..20 } })
  validates_confirmation_of :password
end
