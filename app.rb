require 'bundler'
Bundler.require

set :views, File.expand_path('../views', __FILE__)
set :public_dir, File.expand_path('../public', __FILE__)



ActiveRecord::Base.establish_connection(
  :adapter => 'postgresql',
  :database => 'deadsongs'
)


get '/' do

  erb :index

end

get '/api/albums' do

  Album.all.to_json

end

get '/api/albums/:id' do

  Album.find(params[:id]).to_json

end

post '/api/albums' do

  Album.create({ :albumname =>  params[:albumname], :song => params[:song], :releasedate => params[:releasedate], :albumcover => params[:albumcover]}).to_json

end

patch '/api/albums/:id' do

  album_args = { :albumname =>  params[:albumname], :song => params[:song], :releasedate => params[:releasedate], :albumcover => params[:albumcover]}

  @album = Album.find(params[:id])
  @album.update(album_args)
  @album.to_json

end

put '/api/albums/:id' do

  album_args = { :albumname =>  params[:albumname], :song => params[:song], :releasedate => params[:releasedate], :albumcover => params[:albumcover]}

  @album = Album.find(params[:id])
  @album.update(album_args)
  @album.to_json

end

delete '/api/albums/:id' do

  Album.destroy(params[:id]).to_json

end
