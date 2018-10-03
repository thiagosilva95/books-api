import app from './app'

app.listen(app.get('port'), () => {
    console.log(`App is running on port 7000 ${app.get('port')}`)
})