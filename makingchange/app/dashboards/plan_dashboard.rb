require "administrate/base_dashboard"

class PlanDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    subscriptions: Field::HasMany.with_options(class_name: "Payola::Subscription"),
    users: Field::HasMany,
    id: Field::Number,
    name: Field::String,
    stripe_id: Field::String,
    interval: Field::String,
    amount: Field::Number,
    created_at: Field::DateTime,
    updated_at: Field::DateTime,
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = [
    :subscriptions,
    :users,
    :id,
    :name,
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = [
    :subscriptions,
    :users,
    :id,
    :name,
    :stripe_id,
    :interval,
    :amount,
    :created_at,
    :updated_at,
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = [
    :subscriptions,
    :users,
    :name,
    :stripe_id,
    :interval,
    :amount,
  ].freeze

  # Overwrite this method to customize how plans are displayed
  # across all pages of the admin dashboard.
  #
  # def display_resource(plan)
  #   "Plan ##{plan.id}"
  # end
end
