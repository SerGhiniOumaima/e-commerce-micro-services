package org.sid.inventoryservice;

import org.sid.inventoryservice.entities.Product;
import org.sid.inventoryservice.repositories.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

@SpringBootApplication
public class InventoryServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(InventoryServiceApplication.class, args);
	}

	@Bean
	CommandLineRunner start(ProductRepository productRepository, RepositoryRestConfiguration restConfiguration){
		restConfiguration.exposeIdsFor(Product.class);
		return args -> {
			productRepository.save(new Product(null,"Ordinateur",7780,12));
			productRepository.save(new Product(null,"Imprimante",2000,124));
			productRepository.save(new Product(null,"Smatphone",1200,77));
			productRepository.save(new Product(null,"Ecouteurs",100,200));
			productRepository.save(new Product(null,"Souris",200,20));
			productRepository.save(new Product(null,"Clavier",500,20));
			productRepository.findAll().forEach(product -> {
				System.out.println(product.getName());
			});
		};
	}
}
