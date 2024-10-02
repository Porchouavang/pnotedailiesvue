<template>
    <!-- Navbar -->

    <!-- /.navbar -->
    <HeaderComponent />
    <SidebarComponent />
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0"><b class="text-primary">
                                <marquee behavior="" direction="">ຍິນດີຕ້ອນຮັບເຂົ້າສູ່ລະບົບ</marquee>
                            </b></h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><router-link to="/dashboard" href="#">ໜ້າຫຼັກ</router-link></li>
                            <li class="breadcrumb-item active">ແອັດມິນ</li>
                        </ol>
                    </div><!-- /.col -->
                </div><!-- /.row -->
                <div class="row">
                    <div class="col-md-6"></div>
                    <div class="col-md-6">
                        <div class="d-flex">
                            <input type="search" required v-model="searchQuery" class="form-control"
                                placeholder="ຊອກຫາ...">
                            <button @click="SearchAdmin" class="btn btn-primary ml-2"><i
                                    class="fas fa-search"></i></button>
                        </div>
                    </div>
                </div>
            </div><!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->

        <!-- Main content -->
        <section class="content">
            <div class="container">
                <!-- Small boxes (Stat box) -->
                <button class="btn btn-primary mb-2"><i class="fas fa-plus mr-2"></i>ເພີ່ມໃໝ່</button>
                <div class="overflow-auto">
                    <table class="table table-striped table-hover w-100">
                        <thead>
                            <tr>
                                <th>ລຳດັບ</th>
                                <th>5-6</th>
                                <th>6-7</th>
                                <th>7-8</th>
                                <th>8-9</th>
                                <th>9-10</th>
                                <th>10-11</th>
                                <th>11-12</th>
                                <th>12-13</th>
                                <th>13-14</th>
                                <th>14-15</th>
                                <th>15-16</th>
                                <th>16-17</th>
                                <th>17-18</th>
                                <th>18-19</th>
                                <th>19-20</th>
                                <th>20-21</th>
                                <th>21-22</th>
                                <th>22-23</th>
                                <th>23-5</th>
                                <th>ວັນ</th>
                                <th>ວັນທີ່</th>
                                <th>ອັບເດດ</th>
                                <th>ປຸ່ມຄຳສັ່ງ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-if="none_data">
                                <td class="text-danger text-bold">ຂໍອະໄພ ຂໍ້ມູນທີ່ຄົ້ນຫາບໍ່ພົບໃນລະບົບ</td>
                            </tr>
                            <tr v-else v-for="(daily, index) in dailies" :key="daily.DL_ID">
                                <td>{{ index + 1 }}</td>
                                <td>{{ daily.five_six }}</td>
                                <td>{{ daily.six_seven }}</td>
                                <td>{{ daily.seven_eight }}</td>
                                <td>{{ daily.eight_nine }}</td>
                                <td>{{ daily.nine_ten }}</td>
                                <td>{{ daily.ten_eleven }}</td>
                                <td>{{ daily.eleven_twelve }}</td>
                                <td>{{ daily.twelve_thirteen }}</td>
                                <td>{{ daily.thirteen_fourteen }}</td>
                                <td>{{ daily.fourteen_fifteen }}</td>
                                <td>{{ daily.fifteen_sixteen }}</td>
                                <td>{{ daily.sixteen_seventeen }}</td>
                                <td>{{ daily.seventeen_eighteen }}</td>
                                <td>{{ daily.eighteen_nineteen }}</td>
                                <td>{{ daily.nineteen_twenty }}</td>
                                <td>{{ daily.twenty_twentyone }}</td>
                                <td>{{ daily.twentyone_twentytwo }}</td>
                                <td>{{ daily.twentytwo_twentythree }}</td>
                                <td>{{ daily.twentythree_five }}</td>
                                <td>{{ daily.days }}</td>
                                <td>{{ daily.created_at }}</td>
                                <td>{{ daily.updated_at }}</td>
                                <td>
                                    <button class="btn btn-sm btn-success"><i class="fas fa-edit"></i></button>
                                    <button class="btn btn-sm btn-danger"><i class="fas fa-trash"></i></button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div class="modal fade" id="modal-info">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header bg-info">
                                <h4 class="modal-title">ຟອມແກ້ໄຂຂໍ້ມູນແອັດມິນ</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form enctype="multipart/form-data" @submit.prevent="UpdateAdmin">
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">ຊື່:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="updateusername"
                                                id="exampleInputEmail1" placeholder="ກະລຸນາປ້ອນຊື່">
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">ອີເມວ:<span
                                                    class="text-danger">*</span></label>
                                            <input type="email" class="form-control" required v-model="updateemail"
                                                id="exampleInputEmail1" placeholder="email@gmail.com">
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputPassword1">ລະຫັດຜ່ານ:<span
                                                    class="text-danger">*</span></label>
                                            <input type="password" class="form-control" required
                                                v-model="updatepassword" id="exampleInputPassword1"
                                                placeholder="*******">
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputPassword1">ເບີໂທ:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="updatephone"
                                                id="exampleInputPassword1" placeholder="0207x xxx xxx">
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer justify-content-between">
                                    <button type="button" class="btn btn-danger" data-dismiss="modal"><i
                                            class="fas fa-times mr-1"></i>ຍົກເລີກ</button>
                                    <button type="submit" class="btn btn-info"><i class="fas fa-print mr-1"></i>
                                        ບັນທຶກ</button>
                                </div>
                            </form>
                        </div>
                        <!-- /.modal-content -->
                    </div>
                    <!-- /.modal-dialog -->
                </div>
                <!-- /.row (main row) -->
            </div><!-- /.container-fluid -->
        </section>
        <!-- /.content -->
    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import HeaderComponent from './includes/HeaderComponent.vue';
import SidebarComponent from './includes/SidebarComponent.vue';
export default {
    name: "DailyComponent",
    components: {
        HeaderComponent,
        SidebarComponent
    },
    data() {
        return {
            five_six: '',
            six_seven: '',
            seven_eight: '',
            eight_nine: '',
            nine_ten: '',
            ten_eleven: '',
            eleven_twelve: '',
            twelve_thirteen: '',
            thirteen_fourteen: '',
            fourteen_fifteen: '',
            fifteen_sixteen: '',
            sixteen_seventeen: '',
            seventeen_eighteen: '',
            eighteen_nineteen: '',
            nineteen_twenty: '',
            twenty_twentyone: '',
            twentyone_twentytwo: '',
            twentytwo_twentythree: '',
            twentythree_five: '',
            days: '',

            update_five_six: '',
            update_six_seven: '',
            update_seven_eight: '',
            update_eight_nine: '',
            update_nine_ten: '',
            update_ten_eleven: '',
            update_eleven_twelve: '',
            update_twelve_thirteen: '',
            update_thirteen_fourteen: '',
            update_fourteen_fifteen: '',
            update_fifteen_sixteen: '',
            update_sixteen_seventeen: '',
            update_seventeen_eighteen: '',
            update_eighteen_nineteen: '',
            update_nineteen_twenty: '',
            update_twenty_twentyone: '',
            update_twentyone_twentytwo: '',
            update_twentytwo_twentythree: '',
            update_twentythree_five: '',
            update_days: '',

            Daily_ID: null,
            dailies: [],
            searchQuery: ''
        }

    },

    created() {
        this.ShowDailies();
    },

    methods: {

        // Function Show Admin
        async ShowDailies() {
            try {
                const response = await axios.get('http://localhost:3000/api/select-daily');
                if (Array.isArray(response.data)) {
                    this.dailies = response.data;
                    
                } else {
                    console.error('Invalid error', response.data);
                }
            } catch (error) {
                console.error('Error admins', error);
            }
        },

        // Function Create Admin
        async CreateAdmin() {
            try {
                const response = await axios.post('http://localhost:3000/api/create-admin', {
                    username: this.username,
                    email: this.email,
                    password: this.password,
                    phone: this.phone
                });
                console.log(response.data);
                this.ShowAdmins();
                this.ShowSuccessMessage();
                this.ResetAdmin_Form();
            } catch (error) {
                console.error('Error create admin', error);
                this.ShowErrorMessage();
            }
        },

        // Function Reset Admin Form
        async ResetAdmin_Form() {
            this.username = "",
                this.email = "",
                this.password = "",
                this.phone = ""
        },

        async SearchAdmin() {
            const params = new URLSearchParams();
            params.append('username', this.searchQuery,
                'email', this.searchQuery,
                'phone', this.searchQuery
            );

            fetch(`http://localhost:3000/api/search-admin?${params.toString()}`)
                .then((response) => response.json())
                .then((data) => {
                    this.admins = data;
                })
                .catch((error) => {
                    console.error('Search error', error);
                });
        },

        async ConfirmDelete(Admin_ID) {
            Swal.fire({
                title: 'ຕ້ອງການລຶບແທ້ ຫຼື ບໍ່?',
                text: 'ທ່ານແນ່ໃຈບໍ ທີ່ຈະລຶບລະຫັດທີ່:' + Admin_ID,
                icon: 'warning',
                showCancelButton: true,
                cancelButtonText: 'ຍົກເລີກ',
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'ຢືນຢັນ!'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.DeleteAdmin(Admin_ID);
                }
            });
        },

        async DeleteAdmin(Admin_ID) {
            try {
                const response = await axios.delete(`http://localhost:3000/api/delete-admin/${Admin_ID}`);
                console.log(response.data);
                Swal.fire({
                    title: 'ລົບລ້າງ!',
                    text: 'ຂໍ້ມູນໄດ້ຖືກລຶບສຳເລັດແລ້ວ',
                    icon: 'success',
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                    }
                }).then(() => {
                    this.ShowAdmins();
                });
            } catch (error) {
                console.error('Error deleting admin', error);
                Swal.fire({
                    title: 'ລົບລ້າງບໍ່ໄດ້!',
                    text: 'ຂໍ້ມູນທີ່ຕ້ອງການລຶບເກີດຂໍ້ຜິດພາດ',
                    icon: 'error',
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                    }
                });
            }
        },

        // Function Show Admin Item
        async ShowAdminItem(Admin_ID) {
            this.Admin_ID = Admin_ID;
            try {
                const response = await axios.get(`http://localhost:3000/api/admin/${Admin_ID}`);
                this.updateusername = response.data.username,
                    this.updateemail = response.data.email,
                    this.updatepassword = "",
                    this.updatephone = response.data.phone
            } catch (error) {
                console.error(error.response.data);
            }
        },

        // Function Update Admin
        async UpdateAdmin() {
            try {
                const response = await axios.put(`http://localhost:3000/api/update-admin/${this.Admin_ID}`, {
                    username: this.updateusername,
                    email: this.updateemail,
                    password: this.updatepassword,
                    phone: this.updatephone,
                });
                console.log(response.data);
                this.$router.push('/admin');
                this.ShowUpdateMessage();
                this.ShowAdmins();
            } catch (error) {
                console.error(error.response.data)
                this.ShowErrorMessage();
            }
        },
        async ShowUpdateMessage() {
            Swal.fire({
                title: "ແກ້ໄຂສຳເລັດ",
                text: "ຂໍ້ມູນຖືກແກ້ໄຂສຳເລັດແລ້ວ",
                icon: "success",
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                }
            });
        },

        async ShowSuccessMessage() {
            Swal.fire({
                title: "ບັນທຶກສຳເລັດ",
                text: "ຂໍ້ມູນຖືກບັນທຶກສຳເລັດແລ້ວ",
                icon: "success",
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                }
            });
        },

        async ShowErrorMessage() {
            Swal.fire({
                title: "ເກີດຂໍ້ຜິດພາດ",
                text: "ກະລຸນາລອງໃໝ່ອີກຄັ້ງ",
                icon: "warning",
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                }
            });
        },

    }
}
</script>