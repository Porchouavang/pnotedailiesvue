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
                            <li class="breadcrumb-item active">ລາຍຮັບ</li>
                        </ol>
                    </div><!-- /.col -->
                </div><!-- /.row -->
                <div class="row">
                    <div class="col-md-2"></div>
                    <div class="col-md-8">
                        <div class="d-flex justify-content-between">
                                    
                                    <div class="d-flex mb-2">
                                        <input type="search" required v-model="searchQueryIncome" class="form-control"
                                            placeholder="ຊອກຫາລາຍຮັບ">
                                        <button @click="SearchIncome" class="btn btn-success ml-2"><i
                                                class="fas fa-search"></i></button>
                                    </div>
                                    <div class="d-flex mb-2">
                                        <input type="search" required v-model="searchQueryIncomeReason" class="form-control"
                                            placeholder="ຊອກຫາທີ່ມາຂອງເງິນ">
                                        <button @click="SearchIncome" class="btn btn-success ml-2"><i
                                                class="fas fa-search"></i></button>
                                    </div>
                                    
                                </div>
                    </div>
                    <div class="col-md-2"></div>
                </div>
            </div><!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->

        <!-- Main content -->
        <section class="content">
            <div class="container-fluid">
                <!-- Small boxes (Stat box) -->
                <div class="row">
                    <div class="col-md-2"></div>
                    <div class="col-md-8">
                        <button class="btn btn-success" data-toggle="modal" data-target="#modal-add-income"><i
                                class="fas fa-plus mr-1"></i>ເພີ່ມລາຍຮັບ</button>
                        <h3 class="text-center text-success"><b>ລາຍຮັບ</b></h3>
                        <div class="overflow-auto">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>ລຳດັບ</th>
                                        <th>ຈຳນວນເງິນ</th>
                                        <th>ເຫດຜົນທີ່ໄດ້</th>
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
                                    <tr v-else v-for="(incomes, index) in incomes_s" :key="incomes.id">
                                        <td>{{ index + 1 }}</td>
                                        <td><b class="text-success">{{ incomes.income }}</b></td>
                                        <td><b>{{ incomes.income_reason }}</b></td>
                                        <td><b class="text-danger">{{ incomes.status }}</b></td>
                                        <td><b class="text-success">{{ incomes.created_at }}</b></td>
                                        <td><b class="text-danger">{{ incomes.updated_at }}</b></td>
                                        <td>
                                            <button @click="ShowIncomeItem(incomes.id)" class="btn btn-warning"
                                                data-toggle="modal" data-target="#modal-edit-income"><i
                                                    class="fas fa-edit"></i></button>
                                            <button @click="ConfirmDelete(incomes.id)" href="" class="btn btn-danger"><i
                                                    class="fas fa-times"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="col-md-2"></div>
                </div>
                <div class="modal fade" id="modal-add-income">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header bg-success">
                                <h4 class="modal-title">ຟອມບັນທຶກລາຍຮັບ</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form enctype="multipart/form-data" @submit.prevent="CreateIncome">
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="form-group ml-4 mb-3">
                                            <label for="exampleInputEmail1">ຈຳນວນເງິນ:<span
                                                    class="text-danger">*</span></label>
                                            <input type="number" class="form-control" required v-model="income"
                                                id="exampleInputEmail1" placeholder="ຈຳນວນເງິນ">
                                        </div>
                                        <div class="form-group ml-4 mb-3">
                                            <label for="exampleInputEmail1">ໄດ້ມາຈາກ:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="income_reason"
                                                id="exampleInputEmail1" placeholder="ເງິນທີ່ໄດ້ມາຈາກ">
                                        </div>
                                        <div class="form-group ml-4 mb-3">
                                            <label for="exampleInputEmail1">ສະຖານະ:<span
                                                    class="text-danger">*</span></label>
                                            <select name="" id="" class="form-control" required v-model="status">
                                                <option value="">-- ກະລຸນາເລືອກ --</option>
                                                <option value="ເງິນສົດ">-- ເງິນສົດ --</option>
                                                <option value="ເງິນໂອນ">-- ເງິນໂອນ --</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer justify-content-between">
                                    <button type="button" class="btn btn-danger" data-dismiss="modal"><i
                                            class="fas fa-times mr-1"></i>ຍົກເລີກ</button>
                                    <button type="submit" class="btn btn-success"><i class="fas fa-print mr-1"></i>
                                        ບັນທຶກ</button>
                                </div>
                            </form>
                        </div>
                        <!-- /.modal-content -->
                    </div>
                    <!-- /.modal-dialog -->
                </div>
                <div class="modal fade" id="modal-edit-income">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header bg-info">
                                <h4 class="modal-title">ຟອມແກ້ໄຂລາຍຮັບ</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form enctype="multipart/form-data" @submit.prevent="UpdateIncome">
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="form-group ml-4 mb-3">
                                            <label for="exampleInputEmail1">ຈຳນວນເງິນ:<span
                                                    class="text-danger">*</span></label>
                                            <input type="number" class="form-control" required v-model="updateincome"
                                                id="exampleInputEmail1" placeholder="ຈຳນວນເງິນ">
                                        </div>
                                        <div class="form-group ml-4 mb-3">
                                            <label for="exampleInputEmail1">ໄດ້ມາຈາກ:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required
                                                v-model="updateincome_reason" id="exampleInputEmail1"
                                                placeholder="ເງິນທີ່ໄດ້ມາຈາກ">
                                        </div>
                                        <div class="form-group ml-4 mb-3">
                                            <label for="exampleInputEmail1">ສະຖານະ:<span
                                                    class="text-danger">*</span></label>
                                            <select name="" id="" class="form-control" required v-model="updatestatus">
                                                <option value="">-- ກະລຸນາເລືອກ --</option>
                                                <option value="ເງິນສົດ">-- ເງິນສົດ --</option>
                                                <option value="ເງິນໂອນ">-- ເງິນໂອນ --</option>
                                            </select>
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
    name: "IncomeDetailComponent",
    components: {
        HeaderComponent,
        SidebarComponent
    },
    data() {
        return {
            income: "",
            income_reason: "",
            status: "",

            updateincome: "",
            updateincome_reason: "",
            updatestatus: "",
            searchQueryIncome: "",
            searchQueryIncomeReason: "",
            incomes_s: [],
            Income_ID: null,
            none_data: false
        }
    },
    created() {
        this.ShowIncome();
    },
    methods: {

        // Function Show Module
        async ShowIncome() {
            try {
                const response = await axios.get('https://nodejsbackenddailies.onrender.com/api/select-all-income');
                if (Array.isArray(response.data)) {
                    this.incomes_s = response.data;
                } else {
                    console.error('Invalid error', response.data);
                }
            } catch (error) {
                console.error('Error income', error);
            }
        },

        // Function Create Admin
        async CreateIncome() {
            try {
                const response = await axios.post('https://nodejsbackenddailies.onrender.com/api/create-income', {
                    income: this.income,
                    income_reason: this.income_reason,
                    status: this.status
                });
                console.log(response.data);
                this.ShowIncome();
                this.ShowSuccessMessage();
                this.ResetIncome_Form();
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

        // Function Reset Admin Form
        async ResetIncome_Form() {
            this.income = "",
            this.income_reason = ""
        },
        
        async ConfirmDelete(Income_ID) {
            Swal.fire({
                title: 'ຕ້ອງການລຶບແທ້ ຫຼື ບໍ່?',
                text: 'ທ່ານແນ່ໃຈບໍ ທີ່ຈະລຶບລະຫັດທີ່:' + Income_ID,
                icon: 'warning',
                showCancelButton: true,
                cancelButtonText: 'ຍົກເລີກ',
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'ຢືນຢັນ!'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.DeleteIncome(Income_ID);
                }
            });
        },
        
        async DeleteIncome(Income_ID) {
            try {
                const response = await axios.delete(`https://nodejsbackenddailies.onrender.com/api/delete-income/${Income_ID}`);
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
                    this.ShowIncome();
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
        async SearchIncome() {
            const params = new URLSearchParams();
            
            if(this.searchQueryIncome){
                params.append('income',this.searchQueryIncome);
            }
            if(this.searchQueryIncomeReason){
                params.append('income_reason',this.searchQueryIncomeReason)
            }
            
            fetch(`https://nodejsbackenddailies.onrender.com/api/search-income?${params.toString()}`)
                .then((response) => response.json())
                .then((data) => {
                    this.incomes_s = data;
                    this.none_data = data.length === 0;
                })
                .catch((error) => {
                    console.error('Search error', error);
                    this.none_data = true;
                });
        },
        // Fu
        
        // Function Show Module Item
        async ShowIncomeItem(Income_ID) {
            this.Income_ID = Income_ID;
            try {
                const response = await axios.get(`https://nodejsbackenddailies.onrender.com/api/income/${Income_ID}`);
                this.updateincome = response.data.income,
                    this.updateincome_reason = response.data.income_reason,
                    this.updatestatus = response.data.status
            } catch (error) {
                console.error(error.response.data);
            }
        },

        // Function Update Module
        async UpdateIncome() {
            try {
                const response = await axios.put(`https://nodejsbackenddailies.onrender.com/api/update-income/${this.Income_ID}`, {
                    income: this.updateincome,
                    income_reason: this.updateincome_reason,
                    status: this.updatestatus
                });
                console.log(response.data);
                this.$router.push('/income_details');
                this.ShowUpdateMessage();
                this.ShowIncome();
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