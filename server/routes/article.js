"use strict";

const express = require('express');
const passport = require('express');
const ArticleModel = require('../models/article');
const articleRoutes = express.Router();

articleRoutes.get('/', function(req, res, next) {

    if (!req.xhr)
        return next();

    console.log(req.query);
    let articlesCount = 0;
    let articles = [];
    var query = ArticleModel.find({});

    query.find({}).skip(parseInt(req.query.offset)).limit(parseInt(req.query.limit)).exec('find', function(err, data) {
        articles = data;
        ArticleModel.count(function(err, count) {
            if (err) {
                res.statusCode = 500;
                return res.send({ error: 'Server error' });
            } else {
                articlesCount = count;
                return res.send({
                    articlesCount,
                    articles
                });
            }
        });
    });
});

articleRoutes.post('/', function(req, res, next) {

    const article = new ArticleModel({
        title: req.body.title,
        author: req.body.author,
        text: req.body.text,
    });

    article.save(function (err, article) {
        if (!err) {
            console.log(article);
            return res.send({ status: 'OK', article: article });
        } else {
            console.log(err);
            if(err.name == 'ValidationError') {
                res.statusCode = 400;
                next('Validation error');
            } else {
                res.statusCode = 500;
                next('Server error');
            }
        }
    });
});

articleRoutes.get('/:id', function(req, res) {
    return ArticleModel.findById(req.params.id, function (err, article) {
        if(!article) {
            res.statusCode = 404;
            return res.send({ error: 'Not found' });
        }
        if (!err) {
            return res.send({ status: 'OK', article:article });
        } else {
            res.statusCode = 500;
            //log.error('Internal error(%d): %s',res.statusCode,err.message);
            return res.send({ error: 'Server error' });
        }
    });
});

articleRoutes.put('/:id', function (req, res){
    return ArticleModel.findById(req.params.id, function (err, article) {
        if(!article) {
            res.statusCode = 404;
            return res.send({ error: 'Not found' });
        }

        article.title = req.body.title;
        article.text = req.body.text;
        article.author = req.body.author;
        article.images = req.body.images;
        article.dateModified = Date.Now;
        return article.save(function (err) {
            if (!err) {
                //log.info("article updated");
                return res.send({ status: 'OK', article:article });
            } else {
                if(err.name == 'ValidationError') {
                    res.statusCode = 400;
                    res.send({ error: 'Validation error' });
                } else {
                    res.statusCode = 500;
                    res.send({ error: 'Server error' });
                }
                //log.error('Internal error(%d): %s',res.statusCode,err.message);
            }
        });
    });
});

articleRoutes.delete('/:id', function (req, res){
    return ArticleModel.findById(req.params.id, function (err, article) {
        if(!article) {
            res.statusCode = 404;
            return res.send({ error: 'Not found' });
        }
        return article.remove(function (err) {
            if (!err) {
                //log.info("article removed");
                return res.send({ status: 'OK' });
            } else {
                res.statusCode = 500;
                //log.error('Internal error(%d): %s',res.statusCode,err.message);
                return res.send({ error: 'Server error' });
            }
        });
    });
});

module.exports = articleRoutes;