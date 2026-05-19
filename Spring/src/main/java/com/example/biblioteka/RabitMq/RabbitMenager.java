package com.example.biblioteka.RabitMq;

import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

@Service
public class RabbitMenager {

    private static final String HOST = "localhost";
    private static final boolean DURABLE = false;
    private static final boolean EXCLUSIVE = false;
    private static final boolean AUTO_DELETE = false;

    public void putQueue(String queueName) {
        ConnectionFactory connectionFactory = new ConnectionFactory();
        connectionFactory.setHost(HOST);

        try (
                Connection connection = connectionFactory.newConnection();
                Channel channel = connection.createChannel()
        ) {
            channel.queueDeclare(queueName, DURABLE, EXCLUSIVE, AUTO_DELETE, null);
        } catch (IOException | TimeoutException exception) {
            exception.printStackTrace();
        }
    }
}