require 'oembed'
require 'radiator/config_parser'

conf = Radiator::ConfigParser.new("config/embedly.yml").yml
OEmbed::Providers::Embedly.endpoint += "?key=#{conf[:api_key]}"

OEmbed::Providers.register_all
OEmbed::Providers.register_fallback OEmbed::Providers::Embedly
