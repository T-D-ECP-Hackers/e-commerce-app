package org.global.ecp.hackathon.app.user;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.global.ecp.hackathon.app.user.model.User;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepository {

    // TODO: set up persisted cache and DB
    private static final Map<UUID, User> usersCache = new HashMap<>();

    public static void addToCache(final User newUser) {

        usersCache.put(newUser.getId(), newUser);
        System.out.println("");
    }

    public List<User> getAllFromCache() {

        return usersCache.values().stream().toList();
    }

    public User getById(final UUID id) {

        return usersCache.get(id);
    }

    public User replaceById(final User newuser) {

        UUID newuserId = newuser.getId();
        usersCache.replace(newuserId, newuser);
        return usersCache.get(newuserId);
    }

    public void deleteById(final UUID userUUID) {

        usersCache.remove(userUUID);
    }
}
