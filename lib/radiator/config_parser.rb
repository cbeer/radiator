require 'erb'
require 'yaml'

module Radiator
  class ConfigParser
    attr_reader :file

    def initialize file
      @file = file
    end
    
    def env
      yml[::Rails.env]
    end
    
    def yml
      unless File.exists? file
        raise "You are missing the configuration file: #{file}"
      end

      begin
        @erb = ERB.new(IO.read(file)).result(binding)
      rescue Exception => e
        raise("#{file} was found, but could not be parsed with ERB. \n#{$!.inspect}")
      end

      begin
        @yml = YAML::load(@erb)
      rescue StandardError => e
        raise("#{file} was found, but could not be parsed.\n")
      end

      if @yml.nil? || !@yml.is_a?(Hash)
        raise("#{file} was found, but was blank or malformed.\n")
      end

      return @yml.symbolize_keys
    end
    
    
    
  end
end
