# Renhou - Ứng dụng quản lý phòng trọ

Renhou là ứng dụng mobile giúp quản lý phòn trọ cho chủ  thuê nhà trên cả hai nền tảng là android và iOS.

### Công nghệ sử dụng

Renhou sử dụng các công nghệ sau:

* [React-native] - Xây dựng ứng dụng mobile cho android và iOS
* [Nodejs / Express JS] - Xây dựng back-end cho ứng dụng
* [Mongo DB] - Lưu trữ dữ liệu cho ứng dụng
* [Redux] - Quản lý state cho ứng dunng

### Cài đặt môi trường để chạy dự án
* Cài đặt XCode và Android studio
* Cài đặt Node Js và npm: https://www.npmjs.com/get-npm
* Cài đặt môi trường cho React-native: https://facebook.github.io/react-native/docs/0.59/getting-started
* Cài đặt Back-end để chạy dự án: https://github.com/thinhkhang97/Renhou-BE/blob/master/README.md
* Cài đặt Cocoapods: https://guides.cocoapods.org/using/getting-started.html

### Cài đặt và khởi chạy dự án
Cài đặt các package trong dự án

```sh
$ cd Renhou
$ npm install -d
```

Chạy các package của file pod
```sh
$ cd ios
$ pod install
```

Link các package
```sh
$ react-native link
```

Khởi chạy server local host
```sh
$ cd Renhou-BE
$ cd src
$ npm start
```

Khởi chạy dự án cho iOS
```sh
$ cd Renhou
$ react-native run-ios
```

Khởi chạy dự án cho android
```sh
$ cd Renhou
$ react-native run-android
```

License
----

Team 2 - DACNPM - 2019
