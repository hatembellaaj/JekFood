package com.jekfood.delivery.service.dto;

import java.io.Serializable;
import java.util.Objects;
import javax.validation.constraints.*;

/**
 * A DTO for the {@link com.jekfood.delivery.domain.Plates} entity.
 */
@SuppressWarnings("common-java:DuplicatedBlocks")
public class PlatesDTO implements Serializable {

    private String id;

    @NotNull
    private String name;

    @NotNull
    private Double price;

    private byte[] photo;

    private String photoContentType;
    private RestaurantDTO restaurant;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public byte[] getPhoto() {
        return photo;
    }

    public void setPhoto(byte[] photo) {
        this.photo = photo;
    }

    public String getPhotoContentType() {
        return photoContentType;
    }

    public void setPhotoContentType(String photoContentType) {
        this.photoContentType = photoContentType;
    }

    public RestaurantDTO getRestaurant() {
        return restaurant;
    }

    public void setRestaurant(RestaurantDTO restaurant) {
        this.restaurant = restaurant;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof PlatesDTO)) {
            return false;
        }

        PlatesDTO platesDTO = (PlatesDTO) o;
        if (this.id == null) {
            return false;
        }
        return Objects.equals(this.id, platesDTO.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id);
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "PlatesDTO{" +
            "id='" + getId() + "'" +
            ", name='" + getName() + "'" +
            ", price=" + getPrice() +
            ", photo='" + getPhoto() + "'" +
            ", restaurant=" + getRestaurant() +
            "}";
    }
}
