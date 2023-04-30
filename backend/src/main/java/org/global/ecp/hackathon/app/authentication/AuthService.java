package org.global.ecp.hackathon.app.authentication;

import org.global.ecp.hackathon.app.exception.UnauthenticatedUserException;
import org.global.ecp.hackathon.app.user.User;
import org.global.ecp.hackathon.app.user.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserRepository userRepository;

    public AuthService(final UserRepository userRepository) {

        this.userRepository = userRepository;
    }

    public Boolean authenticate(final AuthenticationRequest authenticationRequest) {

        final var username = authenticationRequest.getUsername();
        final var optionalUser = userRepository.getUserByUsername(username);

        if (optionalUser.isEmpty()) {
            throw new UnauthenticatedUserException("User does not exist in db: '" + username + "'");
        }

        final var user = optionalUser.get();
        if (!isUserValid(user, authenticationRequest)) {
            throw new UnauthenticatedUserException("Username or password is incorrect for user: '" + username + "'");
        }
        return true;
    }

    private boolean isUserValid(final User user,
                                final AuthenticationRequest authenticationRequest) {

        return user.getUsername().equals(authenticationRequest.getUsername())
                && user.getPassword().equals(authenticationRequest.getPassword());
    }
}
