FROM hobord/php-fpm-laravel:production

COPY ./src /var/www/html

RUN composer update \
	php artisan optimize

RUN chown -R www-data:www-data /var/www/html/storage

