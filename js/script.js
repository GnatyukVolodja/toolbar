$(document).ready(function () {
  $(function () {
    $('#sortable').sortable()
    $('#sortable').disableSelection()
  })
  
  $('textarea').on('input', function () {
    this.style.height = 'auto'
    this.style.height = (this.scrollHeight) + 'px'
    let height = (this.scrollHeight) + 'px'
    $(this).parents('tr').find('textarea').each(function (a, b) {
      b.style.height = height
    })
  })
  $(function () {
    $('.resizable-width').resizable({
      resize: function (event, ui) {
        $(this).css('height', '')
      }
    })
  })
})

Vue.component('userinfo', {
  props: ['table'],
  template: `
    <table class="table table-striped table-bordered" id="my_table">
    <thead>
    <template v-for="(thead, index) in table[0].theads">
      <tr>
        <th class="text-center">#</th>
        <th class="resizable-width ui-widget-content text-center">{{ thead.firstname_1 }}</th>
        <th class="resizable-width ui-widget-content text-center">{{ thead.firstname_2 }}</th>
        <th class="resizable-width ui-widget-content text-center">{{ thead.lasttname_1 }}</th>
        <th class="resizable-width ui-widget-content text-center">{{ thead.lasttname_2 }}</th>
        <th class="resizable-width ui-widget-content text-center">{{ thead.phone_1 }}</th>
        <th class="resizable-width ui-widget-content text-center">{{ thead.phone_2 }}</th>
        <th class="resizable-width ui-widget-content text-center">{{ thead.mail_1 }}</th>
        <th class="resizable-width ui-widget-content text-center">{{ thead.mail_2 }}</th>
      </tr>
    </template>
    </thead>
    <tbody>
    <template v-for="(tbody, index) in table[0].tbodys">
      <tr class="ui-state-default">
        <td class="text-center resizable-height ui-widget-content">{{ index + 1 }}</td>
        <td><textarea v-model.string="tbody.firstname_1" rows="1">{{ tbody.firstname_1 }}</textarea></td>
        <td><textarea v-model.string="tbody.firstname_2" rows="1">{{ tbody.firstname_2 }}</textarea></td>
        <td><textarea v-model.string="tbody.lasttname_1" rows="1">{{ tbody.lasttname_1 }}</textarea></td>
        <td><textarea v-model.string="tbody.lasttname_2" rows="1">{{ tbody.lasttname_2 }}</textarea></td>
        <td><textarea v-model.string="tbody.phone_1" rows="1">{{ tbody.phone_1 }}</textarea></td>
        <td><textarea v-model.string="tbody.phone_2" rows="1">{{ tbody.phone_2 }}</textarea></td>
        <td><textarea v-model.string="tbody.mail_1" rows="1">{{ tbody.mail_1 }}</textarea></td>
        <td><textarea v-model.string="tbody.mail_2" rows="1">{{ tbody.mail_2 }}</textarea></td>
      </tr>
    </template>
    </tbody>
    </table>`
})

let my_table = new Vue({
  el: '#my_table',
  data: {
    table: [{
      theads: [{
        firstname_1: 'Firstname',
        firstname_2: 'Firstname',
        lasttname_1: 'Lasttname',
        lasttname_2: 'Lasttname',
        phone_1: 'Phone',
        phone_2: 'Phone',
        mail_1: 'Mail',
        mail_2: 'Mail'
      }],
      tbodys: [{
        firstname_1: 'John',
        firstname_2: 'John',
        lasttname_1: 'Doe',
        lasttname_2: 'Doe',
        phone_1: '0502928080',
        phone_2: '0502928080',
        mail_1: 'john@example.com',
        mail_2: 'john@example.com'
      }, {
        firstname_1: 'Mary',
        firstname_2: 'Mary',
        lasttname_1: 'Moe',
        lasttname_2: 'Moe',
        phone_1: '0508374657',
        phone_2: '0508374657',
        mail_1: 'mary@example.com',
        mail_2: 'mary@example.com'
      }, {
        firstname_1: 'July',
        firstname_2: 'July',
        lasttname_1: 'Dooley',
        lasttname_2: 'Dooley',
        phone_1: '0507654793',
        phone_2: '0507654793',
        mail_1: 'july@example.com',
        mail_2: 'july@example.com'
      }]
      
    }]
  }
})

let font = new Vue({
  el: '#font',
  methods: {
    font: function () {
      let elements = document.querySelectorAll('#my_table textarea')
      Array.prototype.forEach.call(elements, function (el, i) {
        el.style.fontFamily = `${document.querySelector('#font').value}`
      })
    }
  }
})

let numbers = new Vue({
  el: '#numbers',
  methods: {
    numbers: function () {
      console.log('test')
      count = document.querySelector('#numbers').value
      let elements = document.querySelectorAll('#my_table textarea')
      Array.prototype.forEach.call(elements, function (el, i) {
        el.style.fontSize = `${document.querySelector('#numbers').value + 'px'}`
      })
    }
  }
})

let font_weight = new Vue({
  el: '.font-weight',
  methods: {
    font_weight: function () {
      let el = document.querySelector('.font-weight')
      if (el.parentNode.classList.contains('font-weight-style')) {
        el.parentNode.classList.remove('font-weight-style')
        let my_table = document.querySelectorAll('#my_table textarea')
        Array.prototype.forEach.call(my_table, function (el, i) {
          el.style.fontWeight = 400
        })
      } else {
        el.parentNode.classList.add('font-weight-style')
        let my_table = document.querySelectorAll('#my_table textarea')
        Array.prototype.forEach.call(my_table, function (el, i) {
          el.style.fontWeight = 900
        })
      }
    }
  }
})

let font_style = new Vue({
  el: '.font-style',
  methods: {
    font_style: function () {
      let el = document.querySelector('.font-style')
      if (el.parentNode.classList.contains('font-weight-style')) {
        el.parentNode.classList.remove('font-weight-style')
        let my_table = document.querySelectorAll('#my_table textarea')
        Array.prototype.forEach.call(my_table, function (el, i) {
          el.style.fontStyle = 'normal'
        })
      } else {
        el.parentNode.classList.add('font-weight-style')
        let my_table = document.querySelectorAll('#my_table textarea')
        Array.prototype.forEach.call(my_table, function (el, i) {
          el.style.fontStyle = 'italic'
        })
      }
    }
  }
})

let text_decoration = new Vue({
  el: '.text-decoration',
  methods: {
    text_decoration: function () {
      let el = document.querySelector('.text-decoration')
      if (el.parentNode.classList.contains('font-weight-style')) {
        el.parentNode.classList.remove('font-weight-style')
        let my_table = document.querySelectorAll('#my_table textarea')
        Array.prototype.forEach.call(my_table, function (el, i) {
          el.style.textDecoration = 'none'
        })
      } else {
        el.parentNode.classList.add('font-weight-style')
        let my_table = document.querySelectorAll('#my_table textarea')
        Array.prototype.forEach.call(my_table, function (el, i) {
          el.style.textDecoration = 'underline'
        })
      }
    }
  }
})

let fa_align_left = new Vue({
  el: '.fa_align_left',
  methods: {
    fa_align_left: function () {
      let el = document.querySelectorAll('.fa-left')
      Array.prototype.forEach.call(el, function (el, i) {
        el.classList.remove('position')
        el.children[0].style.fontSize = '16px'
      })
      this.$el.children[0].style.fontSize = '22px'
      
      el[0].classList.add('position')
      let my_table = document.querySelectorAll('#my_table textarea')
      Array.prototype.forEach.call(my_table, function (el, i) {
        el.style.textAlign = 'left'
      })
    }
  }
})

let fa_align_center = new Vue({
  el: '.fa_align_center',
  methods: {
    fa_align_center: function () {
      let el = document.querySelectorAll('.fa-left')
      Array.prototype.forEach.call(el, function (el, i) {
        el.classList.remove('position')
        el.children[0].style.fontSize = '16px'
      })
      this.$el.children[0].style.fontSize = '22px'
      
      el[1].classList.add('position')
      let my_table = document.querySelectorAll('#my_table textarea')
      Array.prototype.forEach.call(my_table, function (el, i) {
        el.style.textAlign = 'center'
      })
    }
  }
})

let fa_align_right = new Vue({
  el: '.fa_align_right',
  methods: {
    fa_align_right: function () {
      let el = document.querySelectorAll('.fa-left')
      Array.prototype.forEach.call(el, function (el, i) {
        el.classList.remove('position')
        el.children[0].style.fontSize = '16px'
      })
      this.$el.children[0].style.fontSize = '22px'
      
      el[2].classList.add('position')
      let my_table = document.querySelectorAll('#my_table textarea')
      Array.prototype.forEach.call(my_table, function (el, i) {
        el.style.textAlign = 'right'
      })
    }
  }
})

let fa_align_justify = new Vue({
  el: '.fa_align_justify',
  methods: {
    fa_align_justify: function () {
      let el = document.querySelectorAll('.fa-left')
      Array.prototype.forEach.call(el, function (el, i) {
        el.classList.remove('position')
        el.children[0].style.fontSize = '16px'
      })
      this.$el.children[0].style.fontSize = '22px'
      
      el[3].classList.add('position')
      let my_table = document.querySelectorAll('#my_table textarea')
      Array.prototype.forEach.call(my_table, function (el, i) {
        el.style.textAlign = 'justify'
      })
    }
  }
})

var count = document.querySelector('#numbers').value

let counts = new Vue({
  el: '.counts_el',
  methods: {
    count_up: function () {
      let my_table = document.querySelectorAll('#my_table textarea')
      Array.prototype.forEach.call(my_table, function (el, i) {
        el.style.fontSize = `${(+count + 1) + 'px'}`
      })
      count++
    },
    count_down: function () {
      let my_table = document.querySelectorAll('#my_table textarea')
      Array.prototype.forEach.call(my_table, function (el, i) {
        el.style.fontSize = `${(+count - 1) + 'px'}`
      })
      count--
    }
  }
})

$('body').on('click', '.format_color_fill', function () {
  $('.favcolor').click()
})

$('body').on('click', '.format_color_text', function () {
  $('.favcolors').click()
})

$('body').on('click', '.border_color', function () {
  $('.border_colors').click()
})

let format_color_fill = new Vue({
  el: '#format_color_fill',
  methods: {
    format_color_fill: function () {
      document.querySelector('.format_color_fill').style.color = document.querySelector('.favcolor').value
      $('td, th').css('background', $('.favcolor').val())
    }
  }
})

let format_color_text = new Vue({
  el: '#format_color_text',
  methods: {
    format_color_text: function () {
      $('.format_color_text').css('color', $('.favcolors').val())
      $('th, td, textarea').each(function (a, b) {
        $(b).css('color', $('.favcolors').val())
      })
    }
  }
})

let border_color = new Vue({
  el: '#border_color',
  methods: {
    border_color: function () {
      document.querySelector('.border_color').style.color = document.querySelector('.border_colors').value
      let border_color = document.querySelector('.border_colors').value
      let my_table = document.querySelectorAll('#my_table td, #my_table th')
      Array.prototype.forEach.call(my_table, function (el, i) {
        el.style.borderColor = border_color
      })
    }
  }
})

let print = new Vue({
  el: '.print',
  methods: {
    print: function () {
      let print_table = document.getElementById('my_table')
      let table = print_table.cloneNode(true)
      let els = table.querySelectorAll('textarea')
      Array.prototype.forEach.call(els, function (el, i) {
        el.parentNode.removeChild(el)
      })
      let td = table.querySelectorAll('td')
      Array.prototype.forEach.call(td, function (el, i) {
        el.style.cssText = 'border: 1px solid black; border-collapse: collapse;'
      })
      let th = table.querySelectorAll('th')
      Array.prototype.forEach.call(th, function (el, i) {
        el.style.cssText = 'border: 1px solid black; border-collapse: collapse;'
      })
      newWin = window.open('')
      newWin.document.write(table.outerHTML)
      newWin.print()
      newWin.close()
    }
  }
})

let fullscreen = new Vue({
  el: '#fullscreen',
  methods: {
    fullscreen: function () {
      let elem = document.documentElement
      if (elem.requestFullscreen) {
        elem.requestFullscreen()
      } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen()
      } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen()
      } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen()
      }
    }
  }
})

let download_table = new Vue({
  el: '.download_table',
  methods: {
    download_table: function () {
      var date = new Date()
      let full_date = date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear()
      $('#my_table').table2excel({
        filename: `${'table_' + full_date}`
      })
    }
  }
})
