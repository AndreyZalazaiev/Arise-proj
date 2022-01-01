package andrew.projects.arise.service;

import andrew.projects.arise.domain.OrderItems;
import andrew.projects.arise.dto.OrderItemDto;
import andrew.projects.arise.exception.OrderManagmentException;

import java.util.List;

interface OrderManagementService {
    List<OrderItems> createOrder(List<OrderItemDto> itemDtos)
            throws OrderManagmentException;
}
