const express = require('express');
const session = require('express-session');
const methodOverride = require('method-override');
const path = require('path');
const db = require('./data/store');

const app = express();
const PORT = process.env.PORT || 3000;

// ---------- Config ----------
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'aliados-da-tessoura-secret',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 * 4 }, 
}));

app.use((req, res, next) => {
  res.locals.usuario = req.session.usuario || null;
  next();
});

function requireAuth(req, res, next) {
  if (!req.session.usuario) {
    return res.redirect('/login');
  }
  next();
}
