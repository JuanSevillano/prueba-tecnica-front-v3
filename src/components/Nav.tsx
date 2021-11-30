import { AppBar, ClickAwayListener, Grow, IconButton, MenuItem, MenuList, Paper, Popper, Toolbar, Typography } from '@material-ui/core';
import { Person } from '@material-ui/icons';
import React, { FC, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { LogOut } from 'store/actions/auth';
import { User } from 'store/types/authTypes';

interface NavProps {
    user: User
    open: boolean
    onClose: any
    isAuthenticated: boolean
}

const Nav: FC<NavProps> = ({ open, isAuthenticated, user, onClose }) => {


    const anchorRef = useRef<HTMLButtonElement>(null);

    const dispatch = useDispatch();

    const handleListKeyDown = (event) => {
        if (event.key === 'Tab') {
            event.preventDefault();
            onClose();
        }
    }


    const logOutHandler = () => {
        dispatch(LogOut());
    }

    if (isAuthenticated) return (
        <AppBar color="primary" position="fixed">
            <Toolbar>
                <IconButton
                    onClick={onClose}
                    ref={anchorRef}>
                    <Person />
                </IconButton>
                <Popper
                    open={open}
                    transition
                    disablePortal
                    role={undefined}
                    anchorEl={anchorRef.current}
                >
                    {
                        ({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{
                                    transformOrigin: placement === 'bottom'
                                        ? 'center top'
                                        : 'center bottom'
                                }}>
                                <Paper>
                                    <ClickAwayListener onClickAway={onClose}>
                                        <MenuList
                                            id="user-menu"
                                            autoFocusItem={open}
                                            onKeyDown={handleListKeyDown}>

                                            <MenuItem onClick={logOutHandler}>Cerrar sesión</MenuItem>

                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )
                    }
                </Popper>
                <Typography variant="h6">
                    La liga - Bienvenidx {user.first_name} {user.last_name}
                </Typography>
            </Toolbar>
        </AppBar>
    )

    return null
}

export default Nav