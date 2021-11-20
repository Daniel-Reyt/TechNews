USE tech;

INSERT INTO `users` (`id_user`, `username`, `password`, `role`) VALUES 
(1, "dada", "dada", 2),
(2, "modo", "modo", 1),
(3, "guest", "guest", 0);

INSERT INTO `news` (`id_news`, `id_user`, `message`, `date`) VALUES 
(1, 1, "new n° 1", "2021-11-20");

INSERT INTO `comments` (`id_comment`, `id_user`, `id_news`, `message`, `date`) VALUES 
(1, 1, 1, "comment n° 1", "2021-11-20");