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
                            <li class="breadcrumb-item active">ບັນທຶກ</li>
                        </ol>
                    </div><!-- /.col -->
                </div><!-- /.row -->
                <div class="row">
                    <div class="col-md-6"></div>
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="d-flex">
                                    <select name="" id="" v-model="searchQuerydays" required class="form-control">
                                                        <option value="ຈັນ">ຈັນ</option>
                                                        <option value="ອັງຄານ">ອັງຄານ</option>
                                                        <option value="ພຸດ">ພຸດ</option>
                                                        <option value="ພະຫັດ">ພະຫັດ</option>
                                                        <option value="ສຸກ">ສຸກ</option>
                                                    </select>
                            <button @click="SearchSchoolTable" class="btn btn-primary ml-2"><i
                                    class="fas fa-search"></i></button>
                        </div>
                            </div>
                            <div class="col-md-6">
                                <div class="d-flex">
                            <input type="search" required v-model="searchQueryfirst_time" class="form-control"
                                placeholder="ຊົ່ວໂມງທຳອິດ...">
                            <button @click="SearchSchoolTable" class="btn btn-primary ml-2"><i
                                    class="fas fa-search"></i></button>
                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->

        <!-- Main content -->
        <section class="content">
            <div class="container-fluid">
                <!-- Small boxes (Stat box) -->
                    <div class="container">
                        <div class="card-body">
                            <button class="btn btn-primary text-start" data-toggle="modal" data-target="#modal-add-table"><i class="fas fa-plus mr-1"></i>ເພີ່ມຕາຕະລາງ</button>
                            <h3 class="text-center text-bold">ຕາຕະລາງຮຽນ</h3>
                        <div class="overflow-auto">
                            <table class="table table-striped border">
                        <thead>
                            <tr>
                                <th>ລຳດັບ</th>
                                <th>ວັນ</th>
                                <th>ຊົ່ວໂມງທີ່1</th>
                                <th>ຊົ່ວໂມງທີ່2</th>
                                <th>ຊົ່ວໂມງທີ່3</th>
                                <th>ຊົ່ວໂມງທີ່4</th>
                                <th>ຕັ້ງແຕ່ວັນທີ່:</th>
                                <th>ຈົນເຖິງວັນທີ່:</th>
                                <th>ປຸ່ມຄຳສັ່ງ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-if="none_data">
                                        <td class="text-danger text-bold">ຂໍອະໄພ ຂໍ້ມູນທີ່ຄົ້ນຫາບໍ່ພົບໃນລະບົບ</td>
                                    </tr>
                                    <tr v-else v-for="(school_table, index) in school_tables" :key="school_table.id">
                                        <td>{{ index + 1 }}</td>
                                        <td><b class="text-danger">{{ school_table.days }}</b></td>
                                        <td><b>{{ school_table.first_time }}</b></td>
                                        <td><b>{{ school_table.second_time }}</b></td>
                                        <td><b>{{ school_table.third_time }}</b></td>
                                        <td><b>{{ school_table.fourth_time }}</b></td>
                                        <td><b class="text-primary">{{ school_table.since_date }}</b></td>
                                        <td><b class="text-success">{{ school_table.until_date }}</b></td>
                                        <td>
                                            <button @click="ShowSchoolTableItem(school_table.id)" class="btn btn-warning"
                                                data-toggle="modal" data-target="#modal-edit-table"><i
                                                    class="fas fa-edit"></i></button>
                                            <button @click="ConfirmDelete(school_table.id)" href=""
                                                class="btn btn-danger"><i class="fas fa-times"></i></button>
                                        </td>
                                    </tr>
                        </tbody>
                    </table>
                        </div>
                        </div>
                    </div>
                <div class="modal fade" id="modal-add-table">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header bg-primary">
                                <h4 class="modal-title">ຟອມເພີ່ມຕາຕະລາງ</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form enctype="multipart/form-data" @submit.prevent="CreateSchoolTable">
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">ຊົ່ວໂມງທີ່1:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" v-model="first_time" required placeholder="ຊົ່ວໂມງທີ່1"/>
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">ຊົ່ວໂມງທີ່2:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" v-model="second_time" required placeholder="ຊົ່ວໂມງທີ່2"/>
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">ຊົ່ວໂມງທີ່3:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" v-model="third_time" required placeholder="ຊົ່ວໂມງທີ່3"/>
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">ຊົ່ວໂມງທີ່4:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" v-model="fourth_time" required placeholder="ຊົ່ວໂມງທີ່4"/>
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">ວັນ:<span
                                                    class="text-danger">*</span></label>
                                                    <select name="" id="" v-model="days" required class="form-control">
                                                        <option value="ຈັນ">ຈັນ</option>
                                                        <option value="ອັງຄານ">ອັງຄານ</option>
                                                        <option value="ພຸດ">ພຸດ</option>
                                                        <option value="ພະຫັດ">ພະຫັດ</option>
                                                        <option value="ສຸກ">ສຸກ</option>
                                                    </select>
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">ຕັ້ງແຕ່ວັນທີ່:<span
                                                    class="text-danger">*</span></label>
                                            <input type="date" class="form-control" v-model="since_date" required placeholder=""/>
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">ຈົນເຖິງວັນທີ່:<span
                                                    class="text-danger">*</span></label>
                                            <input type="date" class="form-control" v-model="until_date" required placeholder="ຊົ່ວໂມງທີ່1"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer justify-content-between">
                                    <button type="button" class="btn btn-danger" data-dismiss="modal"><i
                                            class="fas fa-times mr-1"></i>ຍົກເລີກ</button>
                                    <button type="submit" class="btn btn-primary"><i class="fas fa-print mr-1"></i>
                                        ບັນທຶກ</button>
                                </div>
                            </form>
                        </div>
                        <!-- /.modal-content -->
                    </div>
                    <!-- /.modal-dialog -->
                </div>
                <div class="modal fade" id="modal-edit-table">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header bg-info">
                                <h4 class="modal-title">ຟອມແກ້ໄຂຕາຕະລາງ</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form enctype="multipart/form-data" @submit.prevent="UpdateSchoolTable">
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">ຊົ່ວໂມງທີ່1:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" v-model="update_first_time" required placeholder="ຊົ່ວໂມງທີ່1"/>
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">ຊົ່ວໂມງທີ່2:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" v-model="update_second_time" required placeholder="ຊົ່ວໂມງທີ່2"/>
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">ຊົ່ວໂມງທີ່3:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" v-model="update_third_time" required placeholder="ຊົ່ວໂມງທີ່3"/>
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">ຊົ່ວໂມງທີ່4:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" v-model="update_fourth_time" required placeholder="ຊົ່ວໂມງທີ່4"/>
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">ວັນ:<span
                                                    class="text-danger">*</span></label>
                                                    <select name="" id="" v-model="update_days" required class="form-control">
                                                        <option value="ຈັນ">ຈັນ</option>
                                                        <option value="ອັງຄານ">ອັງຄານ</option>
                                                        <option value="ພຸດ">ພຸດ</option>
                                                        <option value="ພະຫັດ">ພະຫັດ</option>
                                                        <option value="ສຸກ">ສຸກ</option>
                                                    </select>
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">ຕັ້ງແຕ່ວັນທີ່:<span
                                                    class="text-danger">*</span></label>
                                            <input type="date" class="form-control" v-model="update_since_date" required placeholder=""/>
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">ຈົນເຖິງວັນທີ່:<span
                                                    class="text-danger">*</span></label>
                                            <input type="date" class="form-control" v-model="update_until_date" required placeholder="ຊົ່ວໂມງທີ່1"/>
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

import HeaderComponent from './includes/HeaderComponent.vue';
import SidebarComponent from './includes/SidebarComponent.vue';
import axios from 'axios';
import Swal from 'sweetalert2';
export default {
    name: "SchoolTableComponent",
    components: {
        HeaderComponent,
        SidebarComponent
    },
    data() {
        return {
            content: "",
            first_time: "",
            second_time: "",
            third_time: "",
            fourth_time: "",
            days: "",
            since_date: "",
            until_date: "",

            update_first_time: "",
            update_second_time: "",
            update_third_time: "",
            update_fourth_time: "",
            update_days: "",
            update_since_date: "",
            update_until_date: "",
            Table_ID: null,
            school_tables: [],
            searchQuerydays: "",
            searchQueryfirst_time: "",

            none_data: false
        }
    },
    created() {
        this.ShowSchoolTable();
    },
    methods: {

        async ShowSchoolTable() {
            try {
                const response = await axios.get('http://localhost:3000/api/select-school-table');
                if (Array.isArray(response.data)) {
                    this.school_tables = response.data;
                } else {
                    console.error('Invalid error', response.data);
                }
            } catch (error) {
                console.error('Error School Table', error);
            }
        },
        
        async CreateSchoolTable() {
            try {
                const response = await axios.post('http://localhost:3000/api/create-school-table', {
                    first_time: this.first_time,
                    second_time: this.second_time,
                    third_time: this.third_time,
                    fourth_time: this.fourth_time,
                    days: this.days,
                    since_date: this.since_date,
                    until_date: this.until_date,
                });
                console.log(response.data);
                this.ShowSchoolTable();
                this.ShowSuccessMessage();
                this.ResetSchoolTable_Form();
            } catch (error) {
                console.error('Error create admin', error);
                this.ShowErrorMessage();
            }
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

        async ResetSchoolTable_Form() {
            this.first_time = "",
            this.second_time = "",
            this.third_time = "",
            this.fourth_time = "",
            this.days = "",
            this.since_date = "",
            this.until_date = ""
        },
        async ShowErrorMessage(){
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

        async ConfirmDelete(Table_ID) {
      Swal.fire({
        title: 'ຕ້ອງການລຶບແທ້ ຫຼື ບໍ່?',
        text: 'ທ່ານແນ່ໃຈບໍ ທີ່ຈະລຶບລະຫັດທີ່:' + Table_ID,
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'ຍົກເລີກ',
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'ຢືນຢັນ!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.DeleteSchoolTable(Table_ID);
        }
      });
    },

    async DeleteSchoolTable(Table_ID) {
      try {
        const response = await axios.delete(`http://localhost:3000/api/delete-school-table/${Table_ID}`);
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
          this.ShowSchoolTable();
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
    
    async SearchNote() {
      const params = new URLSearchParams();
      params.append('content', this.searchQuery);

      fetch(`http://localhost:3000/api/search-note?${params.toString()}`)
        .then((response) => response.json())
        .then((data) => {
          this.note_s = data;
          this.none_data = data.length === 0;
        })
        .catch((error) => {
          console.error('Search error', error);
          this.none_data = true;
        });
    },

    async ShowSchoolTableItem(Table_ID){
      this.Table_ID = Table_ID;
      try {
        const response = await axios.get(`http://localhost:3000/api/school-table/${Table_ID}`);

            this.update_first_time = response.data.first_time,
            this.update_second_time = response.data.second_time,
            this.update_third_time = response.data.third_time,
            this.update_fourth_time = response.data.fourth_time,
            this.update_days = response.data.days,
            this.update_since_date = response.data.since_date,
            this.update_until_date = response.data.until_date
      } catch (error){
        console.error(error.response.data);
      }
    },
    async SearchSchoolTable() {
            const params = new URLSearchParams();
            
            if(this.searchQuerydays){
                params.append('days',this.searchQuerydays);
            }
            if(this.searchQueryfirst_time){
                params.append('first_time',this.searchQueryfirst_time)
            }
            
            fetch(`http://localhost:3000/api/search-school-table?${params.toString()}`)
                .then((response) => response.json())
                .then((data) => {
                    this.school_tables = data;
                    this.none_data = data.length === 0;
                })
                .catch((error) => {
                    console.error('Search error', error);
                    this.none_data = true;
                });
        },
  
      
    async UpdateSchoolTable() {
      try {
        const response = await axios.put(`http://localhost:3000/api/update-school-table/${this.Table_ID}`, {
            first_time: this.update_first_time,
            second_time: this.update_second_time,
            third_time: this.update_third_time,
            fourth_time: this.update_fourth_time,
            days: this.update_days,
            since_date: this.update_since_date,
            until_date: this.update_until_date
        });
        console.log(response.data);
        this.$router.push('/school-table');
        this.ShowUpdateMessage();
        this.ShowSchoolTable();
      } catch (error){
        console.error(error.response.data)
        this.ShowErrorMessage();
      }
    },
    
    async ShowUpdateMessage(){
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
    
    }
}

</script>