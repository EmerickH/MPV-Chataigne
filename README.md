# MPV-Chataigne
MPV module for Chataigne
 * Only works on Linux
 * You need to have **socat** installed (apt install socat for example on Ubuntu/Debian)
 * Launch mpv with :
```
mpv myvideo.avi --input-ipc-server=/tmp/mpv.socket
```
 * Or optionnaly to get a black player that doesn't close after a video has been played :
```
mpv blackimage.png --keep-open=yes --input-ipc-server=/tmp/mpv.socket
```
