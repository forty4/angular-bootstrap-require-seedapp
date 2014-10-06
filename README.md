## Install
```
git clone https://github.com/forty4/angular-bootstrap-require-seedapp.git
cd angular-bootstrap-require-seedapp
npm install
bower install
```

## Replace public with seed app in the expressjs
#### app.js
```
app.use(express.static(path.join(__dirname, 'public')));
```

#### public
```
ln -s ../../angular-bootstrap-require-seedapp/app public
```

#### start app
```
npm start
```
