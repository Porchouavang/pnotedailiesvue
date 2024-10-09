<template>
    <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">Alexander Pierce</a>
        </div>
      </div>


      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-item menu-open">
            <router-link to="/dashboard" href="#" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p class="text-bold">
                dashboard (ໜ້າຫຼັກ)
              </p>
            </router-link>
          </li>
          <li class="nav-item menu-open">
            <router-link to="/admin" href="#" class="nav-link">
              <i class="nav-icon fas fa-user"></i>
              <p class="text-bold">
                admin (ແອັດມິນ)
              </p>
            </router-link>
          </li>
          <li class="nav-item menu-open">
            <router-link to="/dailies" href="#" class="nav-link">
              <i class="nav-icon fas fa-book"></i>
              <p class="text-bold">
                ບັນທຶກປະຈຳບັນວັນ
              </p>
            </router-link>
          </li>
          <li class="nav-item menu-open">
            <router-link to="/modules" href="#" class="nav-link">
              <i class="nav-icon fas fa-book"></i>
              <p class="text-bold">
                modules (ໂມດູລ)
              </p>
            </router-link>
          </li>
          <li class="nav-item menu-open">
            <router-link to="/notes" href="#" class="nav-link">
              <i class="nav-icon fas fa-book-open"></i>
              <p class="text-bold">
                notes (ການບັນທຶກ)
              </p>
            </router-link>
          </li>
          <li class="nav-item menu-open">
            <router-link to="/income_expense" href="#" class="nav-link">
              <i class="nav-icon fas">₭</i>
              <p class="text-bold">
                ລາຍຮັບ/ລາຍຈ່າຍ
              </p>
            </router-link>
          </li>
          <li class="nav-item menu-open">
            <router-link to="/plan" href="#" class="nav-link">
              <i class="nav-icon fas fa-book-open"></i>
              <p class="text-bold">
                ແຜນການ
              </p>
            </router-link>
          </li>
          <li class="nav-item menu-open">
            <router-link to="/school-table" href="#" class="nav-link">
              <i class="nav-icon fas fa-table"></i>
              <p class="text-bold">
                ຕາຕະລາງ
              </p>
            </router-link>
          </li>
          <li class="nav-item menu-open">
            <button @click="ConfirmLogout" class="nav-link" style="text-align: start">
              <i class="nav-icon fas fa-sign-out-alt"></i>
              <p class="text-bold">
                ອອກຈາກລະບົບ
              </p>
            </button>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script>

import Swal from 'sweetalert2';
export default {
    name: "SidebarComponent",

    methods:{
      async ConfirmLogout() {
      Swal.fire({
        title: 'ອອກຈາກລະບົບແທ້ ຫຼື ບໍ່?',
        text: 'ທ່ານແນ່ໃຈບໍທີ່ຈະອອກຈາກລະບົບ:' ,
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'ຍົກເລີກ',
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'ຢືນຢັນ!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.HandleLogout();
        }
      });
    },
    async HandleLogout(){
      localStorage.removeItem('token');
      this.ShowLogoutMessage();
      this.$router.push('/login');
    },
    async ShowLogoutMessage(){
  Swal.fire({
    title: "ສຳເລັດ",
    text: "ອອກຈາກລະບົບສຳເລັດແລ້ວ",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
    }
  });
}
    }
}
</script>