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
              <div class="d-flex justify-content-between">
                <div class="d-flex mb-2">
                  <input type="search" required v-model="searchQueryname" class="form-control" placeholder="ຊອກຫາແຜນການ">
                <button @click="SearchPlan" class="btn btn-primary ml-2"><i class="fas fa-search"></i></button>
                </div>
                <div class="d-flex mb-2">
                  <input type="search" required v-model="searchQuerypercent" class="form-control" placeholder="ຊອກຫາ %">
                <button @click="SearchPlan" class="btn btn-primary ml-2"><i class="fas fa-search"></i></button>
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
          <div class="row">
            <div class="col-md-6">
              <h3 class="text-center"><b>ຟອມເພີ່ມແຜນການ</b></h3>
              <!-- general form elements -->
              <div class="card card-primary">
                <div class="card-header">
                  <h3 class="card-title">ເພີ່ມແຜນການ</h3>
                </div>
                <!-- /.card-header -->
                <!-- form start -->
                <form @submit.prevent="CreatePlan">
                  <div class="card-body">
                    <div class="row">
                      <div class="form-group ml-5 mb-3">
                        <label for="exampleInputEmail1">ຊື່:<span class="text-danger">*</span></label>
                        <input type="text" class="form-control" required v-model="name" id="exampleInputEmail1"
                          placeholder="ກະລຸນາປ້ອນຊື່">
                      </div>
                      <div class="form-group ml-5 mb-3">
                        <label for="exampleInputEmail1">ເປີເຊັນ:<span class="text-danger">*</span></label>
                        <input type="number" class="form-control" required v-model="percent" id="exampleInputEmail1"
                          placeholder="%">
                      </div>
                    </div>
                  </div>
                  <!-- /.card-body -->
  
                  <div class="card-footer">
                    <button type="reset" class="btn btn-danger"><i
                        class="fas fa-times mr-1"></i>ຍົກເລີກ</button>&nbsp;&nbsp;<button type="submit"
                      class="btn btn-primary"><i class="fas fa-print mr-1"></i>ບັນທຶກ</button>
                  </div>
                </form>
              </div>
              <!-- /.card -->
            </div>
            <div class="col-md-6">
  
              <h3 class="text-center text-primary"><b>ລາຍຊື່ແຜນການ</b></h3>
              <div class="d-flex justify-content-between">
                <router-link to="/plan-success" class="btn btn-primary btn-sm"><i class="fas fa-arrow-circle-right mr-1"></i> ແຜນການທີ່ສຳເລັດແລ້ວ</router-link>
                <router-link to="/plan-not-success" class="btn btn-danger btn-sm"><i class="fas fa-arrow-circle-right mr-1"></i> ແຜນການທີ່ບໍ່ສຳເລັດ</router-link>
              </div>
              <div class="overflow-auto">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th>ລຳດັບ</th>
                      <th>ຊື່</th>
                      <th>ເປີເຊັນ</th>
                      <th>ເຄື່ອນໄຫວ</th>
                      <th>ສະຖານະ</th>
                      <th>ສ້າງວັນທີ່</th>
                      <th>ອັບເດດວັນທີ່</th>
                      <th>ປຸ່ມຄຳສັ່ງ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-if="none_data">
                      <td class="text-danger text-bold">ຂໍອະໄພ ຂໍ້ມູນທີ່ຄົ້ນຫາບໍ່ພົບໃນລະບົບ</td>
                    </tr>
                    <tr v-else v-for="(plan, index) in plans" :key="plan.id">
                      <td>{{ index + 1 }}</td>
                      <td class="text-bold">{{ plan.name }}</td>
                      <td class="text-bold text-success">{{ plan.percent }}%</td>
                      <td class="text-bold text-danger">{{ plan.active }}%</td>
                      <td :class="plan.status === 0 ? 'text-danger' : 'text-success'">
                      <b>{{ plan.status === 0 ? 'ຍັງບໍ່ສຳເລັດ' : 'ສຳເລັດແລ້ວ' }}</b>
                      </td>
                      <td><b class="text-success">{{ plan.created_at }}</b></td>
                      <td><b class="text-danger">{{ plan.updated_at }}</b></td>
                      <td>
                        <button @click="ShowPlanItem(plan.id)" class="btn btn-warning"  data-toggle="modal" data-target="#modal-info"><i class="fas fa-edit"></i></button>
                        <button @click="ConfirmDelete(plan.id)" href="" class="btn btn-danger"><i
                            class="fas fa-times"></i></button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
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
                <form enctype="multipart/form-data" @submit.prevent="UpdatePlan">
                  <div class="modal-body">
                  <div class="row">
                    <div class="form-group ml-3 mb-3">
                      <label for="exampleInputEmail1">ຊື່:<span class="text-danger">*</span></label>
                      <input type="text" class="form-control" required v-model="updatename" id="exampleInputEmail1"
                        placeholder="ກະລຸນາປ້ອນຊື່">
                    </div>
                    <div class="form-group ml-3 mb-3">
                      <label for="exampleInputEmail1">ເປີເຊັນ:<span class="text-danger">*</span></label>
                      <input type="number" class="form-control" required v-model="updatepercent" id="exampleInputEmail1"
                        placeholder="%">
                    </div>
                    <div class="form-group ml-3 mb-3">
                      <label for="exampleInputEmail1">ເຄື່ອນໄຫວ:<span class="text-danger">*</span></label>
                      <input type="number" class="form-control" required v-model="updateactive" id="exampleInputEmail1"
                        placeholder="%">
                    </div>
                    <div class="form-group ml-3 mb-3">
                      <label for="exampleInputEmail1">ສະຖານະ:<span class="text-danger">*</span></label>
                      <select name="" id="" class="form-control" required v-model="updatestatus">
                        <option value="0">ຍັງບໍ່ສຳເລັດ</option>
                        <option value="1">ສຳເລັດແລ້ວ</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="modal-footer justify-content-between">
                  <button type="button" class="btn btn-danger" data-dismiss="modal"><i
                      class="fas fa-times mr-1"></i>ຍົກເລີກ</button>
                  <button type="submit" class="btn btn-info"><i class="fas fa-print mr-1"></i> ບັນທຶກ</button>
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
    name: "PlanComponent",
    components: {
      HeaderComponent,
      SidebarComponent
    },
    props: {
      plan: Object
    },
    computed: {
      statusClass() {
        return this.plan.status === 0 ? 'text-danger' : 'text-success';
      },
      statusText() {
        return this.plan.status === 0 ? 'not success' : 'success';
      }
    },
    data() {
      return {
        name: '',
        percent: '',

        updatename: '',
        updatepercent:'',
        updateactive:'',
        updatestatus: '',
        Plan_ID: null,
        plans: [],
        searchQueryname: '',
        searchQuerypercent: ''
      }
  
    },
  
    created() {
      this.ShowPlans();
    },
  
    methods: {
  
      // Function Show Admin
      async ShowPlans() {
        try {
          const response = await axios.get('https://nodejsbackenddailies.onrender.com/api/select-plan');
          if (Array.isArray(response.data)) {
            this.plans = response.data;
          } else {
            console.error('Invalid error', response.data);
          }
        } catch (error) {
          console.error('Error admins', error);
        }
      },
  
      // Function Create Admin
      async CreatePlan() {
        try {
          const response = await axios.post('https://nodejsbackenddailies.onrender.com/api/create-plan', {
            name: this.name,
            percent: this.percent
          });
          console.log(response.data);
          this.ShowPlans();
          this.ShowSuccessMessage();
          this.ResetPlan_Form();
        } catch (error) {
          console.error('Error create admin', error);
          this.ShowErrorMessage();
        }
      },
  
      // Function Reset Admin Form
      async ResetPlan_Form() {
        this.name = "",
          this.percent = ""
      },
  
      async SearchPlan() {
            const params = new URLSearchParams();
            
            if(this.searchQueryname){
                params.append('name',this.searchQueryname);
            }
            if(this.searchQuerypercent){
                params.append('percent',this.searchQuerypercent)
            }
            
            fetch(`https://nodejsbackenddailies.onrender.com/api/search-plans?${params.toString()}`)
                .then((response) => response.json())
                .then((data) => {
                    this.plans = data;
                    this.none_data = data.length === 0;
                })
                .catch((error) => {
                    console.error('Search error', error);
                    this.none_data = true;
                });
        },
  
      async ConfirmDelete(Plan_ID) {
        Swal.fire({
          title: 'ຕ້ອງການລຶບແທ້ ຫຼື ບໍ່?',
          text: 'ທ່ານແນ່ໃຈບໍ ທີ່ຈະລຶບລະຫັດທີ່:' + Plan_ID,
          icon: 'warning',
          showCancelButton: true,
          cancelButtonText: 'ຍົກເລີກ',
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'ຢືນຢັນ!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.DeletePlan(Plan_ID);
          }
        });
      },
  
      async DeletePlan(Plan_ID) {
        try {
          const response = await axios.delete(`https://nodejsbackenddailies.onrender.com/api/delete-plan/${Plan_ID}`);
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
            this.ShowPlans();
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
      async ShowPlanItem(Plan_ID){
        this.Plan_ID = Plan_ID;
        try {
          const response = await axios.get(`https://nodejsbackenddailies.onrender.com/api/plan/${Plan_ID}`);
          this.updatename = response.data.name,
          this.updatepercent = response.data.percent,
          this.updateactive = response.data.active,
          this.updatestatus = response.data.status
        } catch (error){
          console.error(error.response.data);
        }
      },
  
      // Function Update Admin
      async UpdatePlan() {
        try {
          const response = await axios.put(`https://nodejsbackenddailies.onrender.com/api/update-plan/${this.Plan_ID}`, {
            name: this.updatename,
            percent: this.updatepercent,
            active: this.updateactive,
            status: this.updatestatus
          });
          console.log(response.data);
          this.$router.push('/plan');
          this.ShowUpdateMessage();
          this.ShowPlans();
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
  
      async ShowSuccessMessage(){
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
  
    }
  }
  </script>