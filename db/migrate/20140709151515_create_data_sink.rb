class CreateDataSink < ActiveRecord::Migration
  def change
    create_table :data_sinks do |t|
      t.string :webhook_id
      t.text :content

      t.timestamps
    end
  end
end
