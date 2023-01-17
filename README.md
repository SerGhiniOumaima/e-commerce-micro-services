# e-commerce-micro-services

Partie 1 : Création des micro-services

1.  Création de l'annuaire Eureka Discrovery Service

![image](https://user-images.githubusercontent.com/96297390/213009701-f9c08b14-c6cb-459f-84f5-4d4504c253fb.png)

![image](https://user-images.githubusercontent.com/96297390/213013276-14aa4886-0b41-4ba7-b7ed-f48d7c17aff4.png)


2.Créer les micro-services et configurer dynamiquement les routes de la gateway

2.1 Customer Service

![image](https://user-images.githubusercontent.com/96297390/213013806-31d5b08f-7a48-4c71-91ae-aa9e70515811.png)


2.2 Inventory Service

![image](https://user-images.githubusercontent.com/96297390/213013920-49043948-49a8-4356-ade3-a53c661e851e.png)


2.3 Billing Service

![image](https://user-images.githubusercontent.com/96297390/213014423-168e5fda-aff5-498f-9827-d8f1f01d1b04.png)

![image](https://user-images.githubusercontent.com/96297390/213014519-747e28c1-3e7d-4795-ac89-0a5dc9c5b879.png)


Partie 2 : Création d'un client Web Angular

1.Création d'une page d'accueil

![image](https://user-images.githubusercontent.com/96297390/213019250-952c41be-4c49-47c7-96d8-66f3a7e01103.png)

2.Création d'une page pour afficher les produits

![image](https://user-images.githubusercontent.com/96297390/213020766-99458278-7caa-4121-ac81-304cb8d536b7.png)

3.Création d'une page pour afficher les clients 

![image](https://user-images.githubusercontent.com/96297390/213029260-f0d1a98a-0bdc-476a-b9f7-12697d6e8f75.png)


3.Création d'une page pour afficher les factures pour chaque client

![image](https://user-images.githubusercontent.com/96297390/213027287-05dd8da7-db4c-43c8-ab2e-e80e5ff4fed0.png)



Partie 3 : Déploiement du serveur Keycloak

1) Créer un Realm 


![image](https://user-images.githubusercontent.com/96297390/210277987-63bb8810-0d17-4075-b1d0-a2db3a4e4a3c.png)

2)Créer l'application cliente : l'application à sécuriser

![image](https://user-images.githubusercontent.com/96297390/210280361-f36ec0ef-3299-42e7-927e-553320fddd1b.png)

3)Créer des utilisateurs

![image](https://user-images.githubusercontent.com/96297390/210280787-13c24305-c697-4857-beca-527f27fa17db.png)

4)Créer des rôles

![image](https://user-images.githubusercontent.com/96297390/210280929-ae33c552-75c6-4e38-96a3-53e0e74c4cb9.png)

![image](https://user-images.githubusercontent.com/96297390/210281002-3545c61c-03a9-41e4-90d8-95655dc9e345.png)

5)Assigner les rôles aux utilisateurs

![image](https://user-images.githubusercontent.com/96297390/210282028-a0f96dee-c410-4460-99eb-e5ca5bbb66dd.png)

![image](https://user-images.githubusercontent.com/96297390/210282133-0aba7d2c-7934-4bc5-848c-4efe78ea92fe.png)

6)Tester avec Postman :

6-1) En utilisant un username et un password

![image](https://user-images.githubusercontent.com/96297390/210283595-90a6898b-c57f-4a8a-885c-81a6d6ca9ddc.png)

![image](https://user-images.githubusercontent.com/96297390/210443498-d08573d8-a0ae-4691-87d9-fd1e647dd889.png)


-Vérifier le access_token avec jwt :

![image](https://user-images.githubusercontent.com/96297390/210283781-95e943e7-da0a-40ec-b2e3-623bdc3a3199.png)


![image](https://user-images.githubusercontent.com/96297390/210283744-818a6e6d-9811-43c8-9eab-f6b2cd0803ed.png)

6-2) En utilisant un refresh_token

![image](https://user-images.githubusercontent.com/96297390/210443935-4f89f379-58d8-4117-9da8-9625093f9af7.png)

![image](https://user-images.githubusercontent.com/96297390/210443994-7afa7532-4c7f-48d7-8c65-6ce4411b2c13.png)

6-2) En utilisant un client id et client secret

![image](https://user-images.githubusercontent.com/96297390/210444210-1995e7a9-e789-4cf9-bd53-5285c3e44136.png)





