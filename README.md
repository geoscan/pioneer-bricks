# Pioneer Bricks
В образе для Пионер Макс встроена блочная среда программирования. 

### Настройка
Pioneer Bricks запускается при включение Raspberry Pi.
Перед выполнением программы убедитесь, что ROS система включена.
Если Вы хотите использовать в программе блок "Сделать фото" необходимо предварительно запустить в терминале:
```
roslaunch gs_camera photo.launch --screen
```

### Как зайти?
Подключитесь к Wi-fi сети Пионер Макс или с помощью Ethernet к коптеру. В Вашем браузере в адресную строку вбейте
```
ip_коптера:2020
```
:heavy_exclamation_mark: __ВАЖНО__: Если Вы подключены по Wi-fi сети Пионер Макс, IP коптера по умолчанию: 10.0.0.31

### Что делать если Pioneer Bricks не работает?
1. Войдите в [ssh](https://github.com/geoscan/geoscan_pioneer_max/blob/master/guides/ssh.md) или [butterfly](https://github.com/geoscan/geoscan_pioneer_max/blob/master/guides/web-ssh.md) терминал
2. Если вы подключены через Wi-fi коптера выполните в терминале:
```
sudo systemctl restart pioneer-bricks-wlan
```
Если вы подключены через Ethernet выполните:
```
sudo systemctl restart pioneer-bricks-eth
```
3. Подождите около 10 секунд и попробуйте войти в Pioneer Bricks снова
