9# == Schema Information
#
# Table name: users
#
#  id                 :integer          not null, primary key
#  name               :string           not null
#  email              :string           not null
#  password_digest    :string           not null
#  session_token      :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class User < ActiveRecord::Base

  validates :password_digest, :name, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token

  validates :session_token, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true




  has_attached_file :image, :styles => {:thumb => "60x60"}, default_url: "demo.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  has_many :created_projects,
  class_name: :Project,
  foreign_key: :creator_id

  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    return user if user && user.is_password?(password)
    nil
  end

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end
