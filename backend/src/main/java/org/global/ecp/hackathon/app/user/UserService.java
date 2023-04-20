package org.global.ecp.hackathon.app.user;

import java.util.List;
import java.util.UUID;

import org.global.ecp.hackathon.app.user.model.User;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(final UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public static User createUser(final User user) {

        // TODO: add to database
        UUID userId = generateUserId();
        User newUser = buildUser(userId, user);
        UserRepository.addToCache(newUser);
        return newUser;
    }

    public List<User> getAllUsers() {

        return userRepository.getAllFromCache();
    }

    public User getUserById(final UUID id) {

        return userRepository.getById(id);
    }

    public User replaceUserById(final User newUser) {

        return userRepository.replaceById(newUser);
    }

    public void deleteUserById(final UUID userUUID) {

        userRepository.deleteById(userUUID);
    }

    private static User buildUser(final UUID userId, final User user) {

        return User.builder()
                      .id(userId)
                      .name(user.getName())
                      .password(user.getPassword())
                      .email(user.getEmail())
                      .avatarUrl(user.getAvatarUrl()).build();
    }

    private static UUID generateUserId() {

        return UUID.randomUUID();
    }
}
