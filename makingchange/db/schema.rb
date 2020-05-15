# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171201212055) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "plans", force: :cascade do |t|
    t.string "name"
    t.string "stripe_id"
    t.string "interval"
    t.integer "amount"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end
  
  create_table "payola_affiliates", id: :serial, force: :cascade do |t|
    t.string "code"
    t.string "email"
    t.integer "percent"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "payola_coupons", id: :serial, force: :cascade do |t|
    t.string "code"
    t.integer "percent_off"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean "active", default: true
  end

  create_table "payola_sales", id: :serial, force: :cascade do |t|
    t.string "email", limit: 191
    t.string "guid", limit: 191
    t.integer "product_id"
    t.string "product_type", limit: 100
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string "state"
    t.string "stripe_id"
    t.string "stripe_token"
    t.string "card_last4"
    t.date "card_expiration"
    t.string "card_type"
    t.text "error"
    t.integer "amount"
    t.integer "fee_amount"
    t.integer "coupon_id"
    t.boolean "opt_in"
    t.integer "download_count"
    t.integer "affiliate_id"
    t.text "customer_address"
    t.text "business_address"
    t.string "stripe_customer_id", limit: 191
    t.string "currency"
    t.text "signed_custom_fields"
    t.integer "owner_id"
    t.string "owner_type", limit: 100
    t.index ["coupon_id"], name: "index_payola_sales_on_coupon_id"
    t.index ["email"], name: "index_payola_sales_on_email"
    t.index ["guid"], name: "index_payola_sales_on_guid"
    t.index ["owner_id", "owner_type"], name: "index_payola_sales_on_owner_id_and_owner_type"
    t.index ["product_id", "product_type"], name: "index_payola_sales_on_product"
    t.index ["stripe_customer_id"], name: "index_payola_sales_on_stripe_customer_id"
  end

  create_table "payola_stripe_webhooks", id: :serial, force: :cascade do |t|
    t.string "stripe_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "payola_subscriptions", id: :serial, force: :cascade do |t|
    t.string "plan_type"
    t.integer "plan_id"
    t.datetime "start"
    t.string "status"
    t.string "owner_type"
    t.integer "owner_id"
    t.string "stripe_customer_id"
    t.boolean "cancel_at_period_end"
    t.datetime "current_period_start"
    t.datetime "current_period_end"
    t.datetime "ended_at"
    t.datetime "trial_start"
    t.datetime "trial_end"
    t.datetime "canceled_at"
    t.integer "quantity"
    t.string "stripe_id"
    t.string "stripe_token"
    t.string "card_last4"
    t.date "card_expiration"
    t.string "card_type"
    t.text "error"
    t.string "state"
    t.string "email"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string "currency"
    t.integer "amount"
    t.string "guid", limit: 191
    t.string "stripe_status"
    t.integer "affiliate_id"
    t.string "coupon"
    t.text "signed_custom_fields"
    t.text "customer_address"
    t.text "business_address"
    t.integer "setup_fee"
    t.decimal "tax_percent", precision: 4, scale: 2
    t.index ["guid"], name: "index_payola_subscriptions_on_guid"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "role"
    t.bigint "plan_id"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["plan_id"], name: "index_users_on_plan_id"
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "users", "plans"
end
