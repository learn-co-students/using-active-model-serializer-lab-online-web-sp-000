RSpec.configure do |config|

  config.expect_with :rspec do |expectations|
    expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  end

  config.mock_with :rspec do |mocks|
    mocks.verify_partial_doubles = true
  end
  
  Capybara.register_driver :poltergeist do |app|
    Capybara::Poltergeist::Driver.new(app, {js_errors: false})
  end

  Capybara.current_driver = :poltergeist

  Capybara.configure do |config|
    config.match = :one
    config.exact_options = true
    config.ignore_hidden_elements = true
    config.visible_text_only = true
  end

end
