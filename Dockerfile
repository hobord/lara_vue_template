# docker build -t hobord/image_regulator .
FROM hobord/php-fpm-laravel:production

MAINTAINER Balazs Szabo <balazs.szabo@gmail.com>

COPY ./src /var/www/html

RUN composer update \
	php artisan optimize

RUN chown -R www-data:www-data /var/www/html/storage

