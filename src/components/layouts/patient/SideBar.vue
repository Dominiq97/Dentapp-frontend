<template>
    <!-- Profile Sidebar -->
        <div class="profile-sidebar">
            <div class="widget-profile pro-widget-content">
                <div class="profile-info-widget">
                    <a href="#" class="booking-doc-img">
                    </a>
                    <div class="profile-det-info">
                        <h3>Carter Guess</h3>
                        <div class="patient-details">
                            <h5><i class="fas fa-birthday-cake"></i> 24 Jul 1983, 38 years</h5>
                            <h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> Newyork, USA</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dashboard-widget">
                <nav class="dashboard-menu">
                    <ul>
                        <li :class="currentPath == 'patient-dashboard' || currentPath == 'appointment-detail' ? 'active' : 'notaactive'">
                            <router-link to="/patient/index">
                                <i class="fas fa-columns"></i>
                                <span>Dashboard</span>
                            </router-link>
                        </li>
                        <li :class="currentPath == 'favourites' ? 'active' : 'notaactive'">
                            <router-link to="/patient/favourites">
                                <i class="fas fa-bookmark"></i>
                                <span>Favourites</span>
                            </router-link>
                        </li>
                        <li :class="currentPath == 'chat' ? 'active' : 'notaactive'">
                            <router-link to="/patient/chat">
                                <i class="fas fa-comments"></i>
                                <span>Message</span>
                                <small class="unread-msg">23</small>
                            </router-link>
                        </li>
                        <li :class="currentPath == 'patient-profile' ? 'active' : 'notaactive'">
                            <router-link to="/patient/profile">
                                <i class="fas fa-user-cog"></i>
                                <span>Profile Settings</span>
                            </router-link>
                        </li>
                        <li :class="currentPath == 'patient-change-password' ? 'active' : 'notaactive'">
                            <router-link to="/patient/change-password">
                                <i class="fas fa-lock"></i>
                                <span>Change Password</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/index">
                                <i class="fas fa-sign-out-alt"></i>
                                <span>Logout</span>
                            </router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    <!-- /Profile Sidebar -->
</template>

<script>
export default {
    computed:{
        currentPath() {
            return this.$route.name;
        }
    }
}
</script>
