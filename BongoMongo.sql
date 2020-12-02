USE `bongomongo`;
CREATE TABLE IF NOT EXISTS `genero` (
  `id` int auto_increment,
  `descripcion` varchar(30),
  PRIMARY KEY (`id`)
);
CREATE TABLE IF NOT EXISTS `plataforma_usuario` (
  `id` int auto_increment,
  `username` varchar(150),
  `email` varchar(254),
  `password` varchar(128),
  `last_login` datetime,
  `is_superuser` tinyint,
  `first_name` varchar(30),
  `last_name` varchar(150),
  `is_active` tinyint,
  `date_joined` datetime,
  `fecha_nacimiento` date,
  `direccion` varchar(100),
  `cedula_ruc` varchar(13),
  `profile_pic` varchar(100),
  `genero` int,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`genero`) REFERENCES `genero`(`id`)
);
CREATE TABLE IF NOT EXISTS `django_session` (
  `session_key` varchar(40),
  `session_data` longtext,
  `expire_date` datetime,
  PRIMARY KEY (`session_key`)
);
CREATE TABLE IF NOT EXISTS `django_content_type` (
  `id` int,
  `app_label` varchar(100),
  `model` varchar(100),
  PRIMARY KEY (`id`)
);
CREATE TABLE IF NOT EXISTS `django_migrations` (
  `id` int,
  `app` varchar(255),
  `name` varchar(255),
  `applied` datetime,
  PRIMARY KEY (`id`)
);
CREATE TABLE IF NOT EXISTS `auth_permission` (
  `id` int,
  `name` varchar(255),
  `content_type_id` int,
  `codename` varchar(100),
  PRIMARY KEY (`id`),
  FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type`(`id`)
);
CREATE TABLE IF NOT EXISTS `auth_group` (
  `id` int,
  `name` varchar(150),
  PRIMARY KEY (`id`),
  KEY `AK` (`name`)
);
CREATE TABLE IF NOT EXISTS `plataforma_usuario_groups` (
  `id` int,
  `usuario_id` int,
  `group_id` int,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`usuario_id`) REFERENCES `plataforma_usuario`(`id`),
  FOREIGN KEY (`group_id`) REFERENCES `auth_group`(`id`)
);
CREATE TABLE IF NOT EXISTS `plataforma_usuario_user_permissions` (
  `id` int,
  `usuario_id` int,
  `permission_id` int,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`usuario_id`) REFERENCES `plataforma_usuario`(`id`),
  FOREIGN KEY (`permission_id`) REFERENCES `auth_permission`(`id`)
);
CREATE TABLE IF NOT EXISTS `auth_group_permissions` (
  `id` int,
  `group_id` int,
  `permission_id` int,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`group_id`) REFERENCES `auth_group`(`id`),
  FOREIGN KEY (`permission_id`) REFERENCES `auth_permission`(`id`)
);
CREATE TABLE IF NOT EXISTS `django_admin_log` (
  `id` int,
  `action_time` datetime,
  `object_id` longtext,
  `object_repr` varchar(200),
  `action_flag` smallint,
  `change_message` longtext,
  `content_type_id` int,
  `user_id` int,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `plataforma_usuario`(`id`),
  FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type`(`id`)
);
CREATE TABLE IF NOT EXISTS `documento_contable` (
  `id` int,
  `fecha_emision` date,
  `total` int,
  `usuario` int,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`usuario`) REFERENCES `plataforma_usuario`(`id`)
);
CREATE TABLE IF NOT EXISTS `entrega` (
  `id` int auto_increment,
  `completada` tinyint,
  `documento` int,
  `repartidor` int,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`repartidor`) REFERENCES `plataforma_usuario`(`id`),
  FOREIGN KEY (`documento`) REFERENCES `documento_contable`(`id`)
);
CREATE TABLE IF NOT EXISTS `tipo_metodo_de_pago` (
  `id` int auto_increment,
  `descripcion` varchar(30),
  PRIMARY KEY (`id`)
);
CREATE TABLE IF NOT EXISTS `metodo_de_pago` (
  `id` int auto_increment,
  `activo` tinyint,
  `detalle` varchar(30),
  `usuario` int,
  `tipo` int,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`tipo`) REFERENCES `tipo_metodo_de_pago`(`id`),
  FOREIGN KEY (`usuario`) REFERENCES `plataforma_usuario`(`id`)
);
CREATE TABLE IF NOT EXISTS `factura` (
  `id` int,
  `documento_contable` int,
  `metodo_de_pago` int,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`documento_contable`) REFERENCES `documento_contable`(`id`),
  FOREIGN KEY (`metodo_de_pago`) REFERENCES `metodo_de_pago`(`id`)
);
CREATE TABLE IF NOT EXISTS `categoria_producto` (
  `id` int auto_increment,
  `descripcion` varchar(30),
  PRIMARY KEY (`id`)
);
CREATE TABLE IF NOT EXISTS `producto` (
  `id` int auto_increment,
  `nombre` varchar(100),
  `descripcion` varchar(200),
  `precio_x_mayor` int,
  `precio_x_menor` int,
  `categoria` int,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`categoria`) REFERENCES `categoria_producto`(`id`)
);
CREATE TABLE IF NOT EXISTS `stock_producto` (
  `id` int auto_increment,
  `cantidad` int,
  `producto` int,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`producto`) REFERENCES `producto`(`id`)
);
CREATE TABLE IF NOT EXISTS `detalle_producto` (
  `id` int auto_increment,
  `cantidad` int,
  `producto` int,
  `documento` int,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`producto`) REFERENCES `producto`(`id`),
  FOREIGN KEY (`documento`) REFERENCES `documento_contable`(`id`)
);