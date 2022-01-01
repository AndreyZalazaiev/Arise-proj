ALTER TABLE `arise`.`orders`
    DROP FOREIGN KEY `FKbi2us9cb14jw8iv9suyjh6bn6`;
ALTER TABLE `arise`.`orders`
    ADD CONSTRAINT `FKbi2us9cb14jw8iv9suyjh6bn6`
        FOREIGN KEY (`order_id` , `product_id`)
            REFERENCES `arise`.`order_details` (`order_id` , `product_id`)
            ON DELETE CASCADE
            ON UPDATE CASCADE;
