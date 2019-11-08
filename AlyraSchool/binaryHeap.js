function BinaryHeap(fonctionScore){
    this.contenu = [];
    this.fonctionScore = fonctionScore;
  }
  
  BinaryHeap.prototype = {
    push: function(element) {
      // Ajouter le nouvel élément à la fin du tableau.
      this.contenu.push(element);
      // L’autoriser à remonter.
      this.bubbleUp(this.contenu.length - 1);
    },
  
    pop: function() {
      // Stocker le premier élément, pour pouvoir le renvoyer plus tard
      var resultat = this.contenu[0];
      // Récupérer l’élément à la fin du tableau.
      var fin = this.contenu.pop();
      // S’il reste au moins un élément,
      // mettre le dernier élément au début et le faire descendre
      if (this.contenu.length > 0) {
        this.contenu[0] = fin;
        this.sinkDown(0);
      }
      return resultat;
    },
  
    remove: function(noeud) {
      var longueur = this.contenu.length;
      // Pour supprimer une valeur,
      // nous devons parcourir le tableau pour la trouver
      for (var i = 0; i < longueur; i++) {
        if (this.contenu[i] == noeud) {
          // Comme on l’a trouvé, on répéte le processus vu dans "pop"
          // pour boucher le trou
          var end = this.contenu.pop();
          if (i != longueur - 1) {
            this.contenu[i] = end;
            if (this.fonctionScore(end) < this.fonctionScore(noeud))
              this.bubbleUp(i);
            else
              this.sinkDown(i);
          }
          return;
        }
      }
      throw new Error("Noeud non trouvé.");
    },
  
    size: function() {
      return this.contenu.length;
    },
  
    bubbleUp: function(n) {
      // On va chercher l’élément qui doit être déplacé
      var element = this.contenu[n];
      // Quand il est à 0, un élément ne peut pas remonter plus haut
      while (n > 0) {
        // Calculer l’index du parent de l’élément, et aller le chercher.
        var parentN = Math.floor((n + 1) / 2) - 1,
            parent = this.contenu[parentN];
        // Echanger les éléments si le parent est plus grand.
        if (this.fonctionScore(element) < this.fonctionScore(parent)) {
          this.contenu[parentN] = element;
          this.contenu[n] = parent;
          // Mettre à jour "n" pour continuer à la nouvelle position.
          n = parentN;
        }
        // On a trouvé un parent qui est plus petit,
        // ce n’est pas nécessaire de le faire bouger davantage.
        else {
          break;
        }
      }
    },
  
    sinkDown: function(n) {
      // Récupérer l’élément cible et son score.
      var longueur = this.contenu.length,
          element = this.contenu[n],
          scoreElement = this.fonctionScore(element);
  
      while(true) {
        // Calculer les indices des éléments fils.
        var fils2N = (n + 1) * 2, fils1N = fils2N - 1;
        // On utilise cela pour stocker la nouvelle position de l’élément,
        // s’il y en a une.
        var aEchanger = null;
        // Si le premier fils existe (est à l’intérieur du tableau)…
        if (fils1N < longueur) {
          // On le récupère et on calcule son score.
          var fils1 = this.contenu[fils1N],
              scoreFils1 = this.fonctionScore(fils1);
          // Si le score est plus petit que celui de notre élément, on doit échanger
          if (scoreFils1 < scoreElement)
            aEchanger = fils1N;
        }
        // Faire les mêmes vérifications pour l’autre fils.
        if (fils2N < longueur) {
          var fils2 = this.contenu[fils2N],
              scoreFils2 = this.fonctionScore(fils2);
          if (scoreFils2 < (aEchanger == null ? scoreElement : scoreFils1))
            aEchanger = fils2N;
        }
  
        // Si l’élément doit être déplacé, on échange et on continue.
        if (aEchanger != null) {
          this.contenu[n] = this.contenu[aEchanger];
          this.contenu[aEchanger] = element;
          n = aEchanger;
        }
        // Sinon, on a fini.
        else {
          break;
        }
      }
    }
  };
 
  var heap = new BinaryHeap(function(x){return x;});
  [ 30, 18, 24, 11, 33, 13, 40, 46, 14, 21, 12, 10, 31, 35, 32 ].forEach(element => {heap.push(element)
  
  });
//([10, 3, 4, 8, 2, 9, 7, 1, 2, 6, 5],
      //  method(heap, "push"));

//heap.remove(2);
//while (heap.size() > 0)
 // print(heap.pop());
 console.log(heap.contenu);