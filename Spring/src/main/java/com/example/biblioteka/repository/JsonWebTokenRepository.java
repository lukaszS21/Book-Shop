package com.example.biblioteka.repository;

public class JsonWebTokenRepository {
    private final static String authPrefix = "Authorization";
    private final static String headerPrefix = "Bearer";

    public static String getAuthPrefix() {
        return authPrefix;
    }

    public static String getHeaderPrefix() {
        return headerPrefix;
    }
}
