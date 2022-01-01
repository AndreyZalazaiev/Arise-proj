create table order_details
(
    order_id   bigint  not null,
    product_id bigint  not null,
    address    varchar(255),
    price      decimal(19, 2),
    quantity   integer not null,
    primary key (order_id, product_id)
);

create table orders
(
    id               bigint not null auto_increment,
    create_date_time datetime(6),
    update_date_time datetime(6),
    order_date       datetime(6),
    order_status     varchar(255),
    user_id          varchar(255),
    order_id         bigint,
    product_id       bigint,
    primary key (id)
);

create table product
(
    id               bigint not null auto_increment,
    create_date_time datetime(6),
    update_date_time datetime(6),
    category         varchar(255),
    description      varchar(255),
    image            varchar(255),
    name             varchar(255),
    price            decimal(19, 2),
    weight           float  not null,
    order_id         bigint,
    product_id       bigint,
    primary key (id)
);

alter table orders
    add constraint FKbi2us9cb14jw8iv9suyjh6bn6
        foreign key (order_id, product_id)
            references order_details (order_id, product_id);

alter table product
    add constraint FK11ga01ud0khd7srw0dpcquhyf
        foreign key (order_id, product_id)
            references order_details (order_id, product_id);