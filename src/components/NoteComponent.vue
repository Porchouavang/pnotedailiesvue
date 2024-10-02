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
                                    <select name="" id="" v-model="searchQueryByModule" class="form-control">
                                                <option v-for="(module_s, index) in modules_s" :key="module_s.id" :value="module_s.id">
                                                {{ index + 1 }}.{{ module_s.module_name }}
                                                </option>
                                            </select>
                            <button @click="SearchNoteByModule" class="btn btn-success ml-2"><i
                                    class="fas fa-search"></i></button>
                        </div>
                            </div>
                            <div class="col-md-6">
                                <div class="d-flex">
                            <input type="search" required v-model="searchQuery" class="form-control"
                                placeholder="ຊອກຫາ...">
                            <button @click="SearchNote" class="btn btn-success ml-2"><i
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
                <div class="row">
                    <div class="col-md-6">
                        <h3 class="text-center"><b>ຟອມເພີ່ມການບັນທຶກ</b></h3>
                        <!-- general form elements -->
                        <div class="card card-success">
                            <div class="card-header">
                                <h3 class="card-title">ເພີ່ມການບັນທຶກ</h3>
                            </div>
                            <!-- /.card-header -->
                            <!-- form start -->
                            <form @submit.prevent="CreateNote">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="form-group ml-2 mb-3">
                                            <label for="exampleInputEmail1">ເນື້ອໃນ:<span
                                                    class="text-danger">*</span></label>
                                            <textarea name="" id="" cols="30" v-model="content" rows="10" class="form-control"
                                                placeholder="ເນື້ອໃນຕ່າງໆ"></textarea>
                                        </div>
                                        <div class="form-group ml-2 mb-3">
                                            <label for="">ໂມດູລ:<span class="text-danger">*</span></label>
                                            <select name="" id="" v-model="Module_Name" class="form-control">
                                                <option v-for="(module_s, index) in modules_s" :key="module_s.id" :value="module_s.id">
                                                {{ index + 1 }}.{{ module_s.module_name }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <!-- /.card-body -->

                                <div class="card-footer">
                                    <button type="reset" class="btn btn-danger"><i
                                            class="fas fa-times mr-1"></i>ຍົກເລີກ</button>&nbsp;&nbsp;<button
                                        type="submit" class="btn btn-success"><i
                                            class="fas fa-print mr-1"></i>ບັນທຶກ</button>
                                </div>
                            </form>
                        </div>
                        <!-- /.card -->
                    </div>
                    <div class="col-md-6">

                        <h3 class="text-center text-success"><b>ລາຍການການບັນທຶກ</b></h3>
                        <div class="overflow-auto">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>ລຳດັບ</th>
                                        <th>ເນື້ອໃນ</th>
                                        <th>ໂມດູລ</th>
                                        <th>ສ້າງວັນທີ່</th>
                                        <th>ອັບເດດວັນທີ່</th>
                                        <th>ປຸ່ມຄຳສັ່ງ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-if="none_data">
                                        <td class="text-danger text-bold">ຂໍອະໄພ ຂໍ້ມູນທີ່ຄົ້ນຫາບໍ່ພົບໃນລະບົບ</td>
                                    </tr>
                                    <tr v-else v-for="note in note_s" :key="note.id">
                                        <td>{{ note.id }}</td>
                                        <td><b>{{ note.content }}</b></td>
                                        <td><b>{{ note.module_name }}</b></td>
                                        <td><b class="text-success">{{ note.created_at }}</b></td>
                                        <td><b class="text-danger">{{ note.updated_at }}</b></td>
                                        <td>
                                            <button @click="ShowNoteItem(note.id)" class="btn btn-warning"
                                                data-toggle="modal" data-target="#modal-info"><i
                                                    class="fas fa-edit"></i></button>
                                            <button @click="ConfirmDelete(note.id)" href="" class="btn btn-danger"><i
                                                    class="fas fa-times"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="modal-info">
                    <div class="modal-dialog modal-md">
                        <div class="modal-content">
                            <div class="modal-header bg-info">
                                <h4 class="modal-title">ຟອມແກ້ໄຂຂໍ້ມູນໂມດູລ</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form enctype="multipart/form-data" @submit.prevent="UpdateNote">
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">ເນື້ອໃນ:<span
                                                    class="text-danger">*</span></label>
                                            <textarea name="" id="" cols="30" rows="10" class="form-control" required v-model="updatecontent"></textarea>
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">ໂມດູລ:<span
                                                    class="text-danger">*</span></label>
                                                    <select name="" id="" v-model="updatemodulename" class="form-control">
                                                <option v-for="module_s in modules_s" :key="module_s.id" :value="module_s.id">
                                                {{ module_s.module_name }}
                                                </option>
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

import HeaderComponent from './includes/HeaderComponent.vue';
import SidebarComponent from './includes/SidebarComponent.vue';
import axios from 'axios';
import Swal from 'sweetalert2';
export default {
    name: "NoteComponent",
    components: {
        HeaderComponent,
        SidebarComponent
    },
    data() {
        return {
            content: "",
            Module_Name: "",

            Note_ID: null,
            Module_ID: null,
            note_s: [],
            modules_s: [],
            searchQuery: "",
            searchQueryByModule: "",

            updatecontent: "",
            updatemodulename: "",

            none_data: false
        }
    },
    created() {
        this.ShowNotes();
        this.ShowModules();
    },
    methods: {

        async ShowNotes() {
            try {
                const response = await axios.get('http://localhost:3000/api/select-note');
                if (Array.isArray(response.data)) {
                    this.note_s = response.data;
                } else {
                    console.error('Invalid error', response.data);
                }
            } catch (error) {
                console.error('Error module', error);
            }
        },
        async ShowModules() {
            try {
                const response = await axios.get('http://localhost:3000/api/select-module');
                if (Array.isArray(response.data)) {
                    this.modules_s = response.data;
                } else {
                    console.error('Invalid error', response.data);
                }
            } catch (error) {
                console.error('Error module', error);
            }
        },
        async CreateNote() {
            try {
                const response = await axios.post('http://localhost:3000/api/create-note', {
                    content: this.content,
                    module_id: this.Module_Name,
                });
                console.log(response.data);
                this.ShowNotes();
                this.ShowSuccessMessage();
                this.ResetNote_Form();
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

        async ResetNote_Form() {
            this.content = ""
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

        async ConfirmDelete(Note_ID) {
      Swal.fire({
        title: 'ຕ້ອງການລຶບແທ້ ຫຼື ບໍ່?',
        text: 'ທ່ານແນ່ໃຈບໍ ທີ່ຈະລຶບລະຫັດທີ່:' + Note_ID,
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'ຍົກເລີກ',
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'ຢືນຢັນ!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.DeleteNote(Note_ID);
        }
      });
    },

    async DeleteNote(Note_ID) {
      try {
        const response = await axios.delete(`http://localhost:3000/api/delete-note/${Note_ID}`);
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
          this.ShowNotes();
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
    async SearchNoteByModule() {
      const params = new URLSearchParams();
      params.append('module_id', this.searchQueryByModule);

      fetch(`http://localhost:3000/api/search-note-by-module?${params.toString()}`)
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

    async ShowNoteItem(Note_ID){
      this.Note_ID = Note_ID;
      try {
        const response = await axios.get(`http://localhost:3000/api/note/${Note_ID}`);
        this.updatecontent = response.data.content
      } catch (error){
        console.error(error.response.data);
      }
    },

    async UpdateNote() {
      try {
        const response = await axios.put(`http://localhost:3000/api/update-note/${this.Note_ID}`, {
            content: this.updatecontent,
            module_id: this.updatemodulename
        });
        console.log(response.data);
        this.$router.push('/notes');
        this.ShowUpdateMessage();
        this.ShowNotes();
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