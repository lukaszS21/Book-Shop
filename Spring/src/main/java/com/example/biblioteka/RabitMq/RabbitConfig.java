package com.example.biblioteka.RabitMq;

import org.springframework.amqp.core.Queue;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitConfig {

    public static final String QUEUE_NAME = "Queue1";

    private static final boolean DURABLE_QUEUE = false;

    @Bean
    public Queue queue() {
        return new Queue(QUEUE_NAME, DURABLE_QUEUE);
    }
}