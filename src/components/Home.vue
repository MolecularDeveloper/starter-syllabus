<template>
  <div class="hello">
    <p>{{location}}</p>
    <section class="section">
      <div class="container">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              {{book.title}} by:<span class="author">&nbsp;{{book.author}}</span>
            </p>
            <p class="card-header-icon">
              Position:&nbsp;{{book.points}}
            </p>
          </header>
          <div class="card-content">
            Description... <a href="#" aria-label="more options" v-on:click="toggleDescription">
      <span class="icon">
        <i class="fa fa-angle-down"></i>
      </span>
    </a>
            <div v-show="isToggled" class="content description">
              <div class="columns">
                <div class="column is-one-fifth">
                  <div class="book-img">
                    <img :src="book.img" />
                  </div>
                </div>
                <div class="column">
                  <div class="book-description">
                    <p>
                      {{book.description}}
                    </p>
                    <p>
                      <a href="#"><i class="fa fa-amazon fa-links"></i></a>
                      <a href="#"><i class="fa fa-google fa-links"></i></a>
                      <a href="#"><i class="fa fa-twitter fa-links"></i></a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style="clear:both;"></div>
          <footer class="card-footer">
            <a href="#" class="card-footer-item">Read More</a>
            <a href="#" class="card-footer-item" v-on:click="downVote">Down Vote  <br/><i class="fa fa-arrow-down"></i></a>
            <a href="#" class="card-footer-item" v-on:click="upVote">Up Vote  <br/><i class="fa fa-arrow-up"></i></a>
          </footer>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      location: 'Home',
      book: {
        title: '12 Rules for Life: An Antidote to Chaos',
        author: 'Jordan Peterson',
        description: "Humorous, surprising and informative, Dr. Peterson tells us why skateboarding boys and girls must be left alone, what terrible fate awaits those who criticize too easily, and why you should always pet a cat when you meet one on the street. What does the nervous system of the lowly lobster have to tell us about standing up straight (with our shoulders back) and about success in life? Why did ancient Egyptians worship the capacity to pay careful attention as the highest of gods? What dreadful paths do people tread when they become resentful, arrogant and vengeful? Dr. Peterson journeys broadly, discussing discipline, freedom, adventure and responsibility, distilling the world's wisdom into 12 practical and profound rules for life. 12 Rules for Life shatters the modern commonplaces of science, faith and human nature, while transforming and ennobling the mind and spirit of its readers.'",
        level: 1,
        points: 0,
        voted: false,
        img: 'https://images-na.ssl-images-amazon.com/images/I/41Z06PJRlZL.jpg'
      },
      isToggled: false
    }
  },
  methods: {
    upVote: function () {
      this.book.points++
    },
    downVote: function () {
      this.book.points--
    },
    toggleDescription: function () {
      this.isToggled = !this.isToggled
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

section.nav-section {
  width: 300px;
  height: 100vh;
}

.author {
  font-style: italic;
}

.description {
  font-size: 14px;
  font-family: 'Cabin', sans-serif;
}

.book-img {
  max-width: 200px;
  padding: 0 10px;
  margin: 0 auto;
}

.book-description {
  text-align: left;
}

.card-header {
  padding: 0 10px;
  background-color: #1ABC9C;
  color: #fff;
}

.card-header-title {
  color: #fff;
  font-size: 18px;
  font-family: 'Roboto Condensed', sans-serif;
}
.fa-links {
  padding: 0 5px;
}
</style>
